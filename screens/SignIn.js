import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity , TextInput} from 'react-native';

const SignIn = ({navigation}) => (

        <View style={styles.ctn}>
            <View style={styles.container1}>
                <Image 
                style={styles.img}
                source={require('../src/assets/icons/Se.png')}
                />
            </View>
            <View style={styles.container2}>
                <Text style={styles.text2}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre Email"
                     />
                     <Text style={styles.text2}>Mot de Passe</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre mot de passe"
                     />
                </View>
            <View style={styles.container3}>
                <TouchableOpacity 
                    style={styles.btn} 
                    onPress={() => alert('Press')}
                >
            <Text style={styles.text}>Se connecter</Text>
    </TouchableOpacity>
    <Text style={styles.text3}>Vous n'avez pas de compte? </Text>
    <TouchableOpacity
                    style={styles.Button1} 
                    sonPress={() => alert('Pressed')}
                >
                    <Text style={styles.inscription}>Inscription</Text>
                </TouchableOpacity>
            </View>
        </View>
)

export default SignIn;
  
  const styles = StyleSheet.create({
      ctn: {
        width:'100%',
        height:'100%',
        backgroundColor:'#F0EBE1'
      },
      container1: {
        width:'100%',
        height:'33%',
        justifyContent:'center',
        alignItems:'center',
      },
      container2: {
        width:'100%',
        height:'33%',
        justifyContent:'center',
        alignItems:'center',
      },
      container3: {
        width:'100%',
        height:'33%',
        justifyContent:'center',
        alignItems:'center',
      },
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
    },
    text: {
        color:'#FFF',
    },
    text2: {
        marginTop:26,
        marginBottom: 10,
    },
    text3: {
        marginTop:26
    },
    input: {
        width:'70%',
        height:'20%',
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 26,
        padding: 10,
        // shadowColor: 'black',
        // shadowOffset: {
        //     width: 0,
        //     height: 3,
        // },
        // shadowOpacity: 0.70,
        // shadowRadius: 3.5,
        // elevation: 5,
        // marginTop: 10,
    },
    img: {
        marginTop: 80
    },
    inscription: {
        marginTop: 8,
        color:'blue',
        fontWeight:'bold',
        textDecorationLine:'underline'
    },
  });