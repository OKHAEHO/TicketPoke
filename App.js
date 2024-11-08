import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainPage from "./src/Main";
import LovePage from "./src/Love";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        initialRouteName="MainPage"
        screenOptions={{
          headerShown: false, // 상단헤더 숨기기
        }}
      >
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator> */}
      {/* 잠시대기 */}
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: "#ff6347",
          drawerInactiveTintColor: "#808080",
          drawerStyle: {
            backgroundColor: "#f4f4f4",
            width: "70%",
          },
          drawerItemStyle: {
            borderRadius: 10,
          },
        }}
      >
        <Drawer.Screen name="Home" component={MainPage} />
        <Drawer.Screen name="여누" component={LovePage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
