import {
  Text,
  Button,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import React from 'react';

export default function Page() {
  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 50,
      }}
    >
      <Text style={style.nameText}>Good Morning Sarah-Louise</Text>

      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', paddingBottom: 20 }}>
          Actions
        </Text>
        <Link href={'/issue'} asChild>
          <TouchableOpacity
            style={{
              height: 100,
              borderColor: 'black',
              borderWidth: 1,
              backgroundColor: 'white',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: '#015EB8',
                  fontWeight: 'bold',
                  padding: 10,
                }}
              >
                3 Credentials ready to review
              </Text>
              <FontAwesome size={20} name="chevron-right" color={'#015EB8'} />
            </View>
          </TouchableOpacity>
        </Link>
        <Link href={'/share'} asChild>
          <TouchableOpacity
            style={{
              height: 100,
              borderColor: 'black',
              borderWidth: 1,
              backgroundColor: 'white',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: '#015EB8',
                  fontWeight: 'bold',
                  padding: 10,
                }}
              >
                1 request ready to share
              </Text>
              <FontAwesome size={20} name="chevron-right" color={'#015EB8'} />
            </View>
          </TouchableOpacity>
        </Link>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            paddingBottom: 20,
            marginTop: 20,
          }}
        >
          Messages
        </Text>
        <Link href={'/issue'} asChild>
          <TouchableOpacity
            style={{
              height: 100,
              borderColor: 'black',
              borderWidth: 1,
              backgroundColor: 'white',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FontAwesome size={20} name="envelope-open" color={'#015EB8'} />
              <Text
                style={{
                  fontSize: 25,
                  color: '#015EB8',
                  fontWeight: 'bold',
                  padding: 10,
                }}
              >
                No new messages
              </Text>
              <FontAwesome size={20} name="chevron-right" color={'#015EB8'} />
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  nameText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});
