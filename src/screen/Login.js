import React, { useEffect, useState } from "react";
import { SafeAreaView, Button } from "react-native";
import * as KakaoLogin from "@react-native-seoul/kakao-login";
import * as Keychain from "react-native-keychain";
import axios from "axios";
import { SERVER_URL } from "../Server";

const Token = async () => {
  try {
    const tokenData = KakaoLogin.login();
    return tokenData;
  } catch (error) {
    if (error.code === "E_CANCELLED_OPERATION") {
      console.log("Login Cancel", error.message);
    } else {
      console.log(`Login Fail(code:${error.code})`, error.message);
    }
  }
};
const Profile = async () => {
  try {
    const profileData = KakaoLogin.getProfile();
    return profileData;
  } catch (error) {
    if (error.code === "E_CANCELLED_OPERATION") {
      console.log("Profile Cancel", error.message);
    } else {
      console.log(`Profile Fail(code:${error.code})`, error.message);
    }
  }
};

export default function Login({ navigation }) {
  const [accessToken, setAccessToken] = useState([]);
  const [refreshToken, setRefreshToken] = useState([]);
  const [id, setId] = useState([]);
  const [nickname, setNickname] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handleLogin = async () => {
    try {
      const tokenData = await Token();
      const profileData = await Profile();

      setAccessToken(tokenData.accessToken);
      setRefreshToken(tokenData.refreshToken);
      setId(profileData.id);
      setNickname(profileData.nickname);
      setEmail(profileData.email);
    } catch (error) {
      console.error(error);
    }
  };
  console.log("login info :", id, nickname, email, accessToken, refreshToken);

  const dbControl = async () => {
    await handleLogin().then(() => {
      const data = {
        users_id: id,
        users_nickname: nickname,
        users_email: email,
        users_refreshToken: refreshToken,
      };
      axios.post(`${SERVER_URL}/login/insert`, data).catch((error) => {
        if (error.response) {
          console.error("ERROR:", error.response.data);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error during request setup:", error.message);
        }
      });
    });
  };

  return (
    <SafeAreaView>
      <Button title="카카오로그인" onPress={() => dbControl()} />
    </SafeAreaView>
  );
}
