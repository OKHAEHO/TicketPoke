import React, {useEffect, useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import * as KakaoLogin from '@react-native-seoul/kakao-login';
import * as Keychain from 'react-native-keychain';

const Token = async () => {
  try {
    const tokenData = KakaoLogin.login();
    return tokenData;
  } catch (error) {
    if (error.code === 'E_CANCELLED_OPERATION') {
      console.log('Login Cancel', error.message);
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
    if (error.code === 'E_CANCELLED_OPERATION') {
      console.log('Profile Cancel', error.message);
    } else {
      console.log(`Profile Fail(code:${error.code})`, error.message);
    }
  }
};

export default function Login() {
  const [accessToken, setAccessToken] = useState([]);
  const [refreshToken, setRefreshToken] = useState([]);
  const [id, setID] = useState([]);
  const [nickname, setNickname] = useState([]);

  const handleLogin = async () => {
    try {
      const tokenData = await Token();
      const profileData = await Profile();

      setAccessToken(tokenData.accessToken);
      setRefreshToken(tokenData.refreshToken);
      setID(profileData.id);
      setNickname(profileData.nickname);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(accessToken, refreshToken, id, nickname);
  return (
    <SafeAreaView>
      <Button title="카카오 로그인" onPress={() => handleLogin()} />
    </SafeAreaView>
  );
}
