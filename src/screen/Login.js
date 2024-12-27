import React from "react";
import { SafeAreaView, Button } from "react-native";
import * as KakaoLogin from "@react-native-seoul/kakao-login";
import axios from "axios";
import { SERVER_URL } from "../Server";

const Token = async () => {
  try {
    const tokenData = await KakaoLogin.login();
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
    const profileData = await KakaoLogin.getProfile();
    return profileData;
  } catch (error) {
    if (error.code === "E_CANCELLED_OPERATION") {
      console.log("Profile Cancel", error.message);
    } else {
      console.log(`Profile Fail(code:${error.code})`, error.message);
    }
  }
};

const handleLogin = async () => {
  try {
    const tokenData = await Token();
    const profileData = await Profile();

    return {
      accessToken: tokenData.accessToken,
      refreshToken: tokenData.refreshToken,
      id: profileData.id,
      nickname: profileData.nickname,
      email: profileData.email,
    };
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};

export default function Login({ navigation }) {
  const dbControl = async () => {
    try {
      const loginData = await handleLogin();
      console.log("Login Data:", loginData);

      const data = {
        id: loginData.id,
        nickname: loginData.nickname,
        email: loginData.email,
        refreshToken: loginData.refreshToken,
      };

      try {
        await axios.post(`${SERVER_URL}/login/management`, data);
        console.log("데이터 전송 성공");
      } catch (error) {
        if (error.response) {
          console.error("ERROR:", error.response.data);
        }
      }

      navigation.navigate("BtmBar", { loginData });
    } catch (loginError) {
      console.error("Error during login:", loginError);
    }
  };

  return (
    <SafeAreaView>
      <Button title="카카오로그인" onPress={() => dbControl()} />
    </SafeAreaView>
  );
}
