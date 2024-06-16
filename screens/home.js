import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Pergi ke Progate"
        onPress={() => {
          navigation.navigate('Progate')
        }}
      />
      <Text style={styles.marginVertical20}>atau</Text>
      <Button
        title="Hubungi Kami"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginVertical20: {
    marginVertical: 20,
  },
})

export default Home