import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Btn2 = () => (
    <TouchableOpacity 
        style={styles.btn} 
        onPress={() => alert('Press')}
        >
            <Text style={styles.text}>Hello</Text>
    </TouchableOpacity>
  );
  const styles = StyleSheet.create ({
    btn: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        width: 200,
        height: 40,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.20,
        shadowRadius: 3.5,
        elevation: 5,
        marginTop: 40
    },
    text: {
        color:'#FFF',
    }
  })
  
  export default Btn2;