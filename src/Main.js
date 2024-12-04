import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import * as s from './style/TotalStyle';
import Icon from 'react-native-vector-icons/Feather';

import axios from 'axios';

export default function Main({navigation}) {
  return (
    <s.V1>
      <s.V2>
        <s.V3>
          <s.V4>
            <TouchableOpacity
              style={{}}
              onPress={() => navigation.openDrawer()}>
              <Text>menu</Text>
            </TouchableOpacity>
            <Text style={{fontWeight: '500', fontSize: '23%'}}>
              Ticket Poké
            </Text>
            <TouchableOpacity
              style={{}}
              onPress={() => navigation.openDrawer()}>
              <Text>user</Text>
            </TouchableOpacity>
          </s.V4>
        </s.V3>
        <View style={{marginTop: '30%'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Crolling');
            }}>
            <Text style={{}}>asdf</Text>
          </TouchableOpacity>
        </View>
      </s.V2>
    </s.V1>
  );
}
