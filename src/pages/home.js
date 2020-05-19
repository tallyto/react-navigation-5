import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="About" onPress={()=> navigation.navigate("About") }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
