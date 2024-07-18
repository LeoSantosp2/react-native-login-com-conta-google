import React from 'react';
import { View, Text } from 'react-native';

import HeaderComponent from '@/src/components/header';

import { styles } from './styled';

export default function PrivateScreen() {
  return (
    <View style={styles.screen}>
      <HeaderComponent />

      <View style={styles.main}>
        <Text>Tela Privada</Text>
      </View>
    </View>
  );
}
