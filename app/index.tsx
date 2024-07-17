import { View, Text, StyleSheet } from 'react-native'

export default function Home() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 18
  }
})