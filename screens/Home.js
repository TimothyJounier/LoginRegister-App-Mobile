import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BtnLogin from '../src/components/Btn1';

const HomeScreen = ({navigation}) => (
    <SafeAreaView style={styles.safe}>

        {/* container image */}
        <View style={styles.container1}>
            <Image 
                style={styles.img}
                source={require('../src/assets/icons/circled-k.png')}
            />
        </View>

        {/* container Bouton */}
        <View style={styles.container2}>
            <BtnLogin navigation={navigation}/>
        </View>
    </SafeAreaView>
)

export default HomeScreen;
  
  const styles = StyleSheet.create({
    safe:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F0EBE1',
      },
    container1: {
      flex: 0.6,
      backgroundColor: '#F0EBE1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
        flex: 0.4,
        backgroundColor: '#F0EBE1',
      },
      img: {
          width:300,
          height: 280
      }
  });