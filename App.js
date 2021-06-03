import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNav from './src/navigation/Stack';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <StackNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#F0EBE1',
  },
});
