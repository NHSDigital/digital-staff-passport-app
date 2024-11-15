/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Buttons } from '@digital-staff-passport/ui';
import Svg, { G, Path } from 'react-native-svg';

export const App = () => {
  const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <Buttons
        title={'Hello'}
        action={'primary'}
        onPress={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </>
  );
};

export default App;
