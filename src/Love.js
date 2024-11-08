import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import * as s from "./style/TotalStyle";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";

export default function Love({ navigation }) {
  // navigation prop 추가
  return (
    <s.F1Bw>
      <View style={{ margin: "16%", marginHorizontal: "5%" }}>
        <s.AcJc>
          <s.Fr>
            <TouchableOpacity
              style={{ position: "absolute", right: 200, top: "-4%" }}
              onPress={() => navigation.openDrawer()} // Drawer 열기
            >
              <Icon name="menu" size={33} />
            </TouchableOpacity>
            <Text style={{ fontWeight: "500", fontSize: "25%" }}>Page 2</Text>
          </s.Fr>
        </s.AcJc>
      </View>
    </s.F1Bw>
  );
}
