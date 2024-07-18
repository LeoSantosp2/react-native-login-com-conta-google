import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { styles } from './styled';

export default function HeaderComponent() {
  const { back } = useRouter();

  return (
    <View style={styles.header}>
      <MaterialIcons name="arrow-back" size={22} onPress={back} />
      <Text style={styles.text}>Header</Text>
    </View>
  );
}
