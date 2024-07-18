import React, { useState } from 'react';
import { View, Text, Pressable, Switch } from 'react-native';
import { Link } from 'expo-router';

import { styles } from './styled';

export default function HomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Home Page</Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Link
        href={isLoggedIn ? '/private-screen/' : '/'}
        style={styles.privatePage}
      >
        <Text>Tela Privada</Text>
      </Link>

      <View style={styles.loggedUser}>
        <Text style={styles.text}>Usuário logado</Text>

        <Switch value={isLoggedIn} />
      </View>
    </View>
  );
}
