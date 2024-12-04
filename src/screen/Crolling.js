import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import * as s from '../style/TotalStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {SERVER_URL} from '../Server';

export default function Crolling({navigation}) {
  const [concertData, setConcertData] = useState([]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/concerts/select`).then(response => {
      const data = response.data;
      setConcertData(data);
      console.log(data);
    });
  }, []);

  return (
    <s.V1>
      <ScrollView>
        {concertData.length > 0 ? (
          concertData.map((concert, index) => (
            <TouchableOpacity key={index} onPress={() => console.log(concert)}>
              <Text>{concert.name}</Text>
              <Text>{concert.place}</Text>
              <Text>{concert.date}</Text>
              <Image
                source={{uri: concert.image_url}}
                style={{width: 100, height: 100}}
                onError={e =>
                  console.log('Image load error:', e.nativeEvent.error)
                }
              />
            </TouchableOpacity>
          ))
        ) : (
          <Text>데이터를 불러오는 중...</Text>
        )}
      </ScrollView>
    </s.V1>
  );
}
