import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';


const SignUp2 = ({navigation}) => (
    <View style={styles.ctn}>
        {/* container champs */}
        <View style={styles.container2}>
                    <Text style={styles.text2}>Prénom</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre prénom"
                    />
                    <Text style={styles.text2}>Nom</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre nom"
                    />
                    <Text style={styles.text2}>Date de naissance</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre date de naissance"
                    />

        {/* container Bouton */}
                <View style={styles.container3}>
                    <TouchableOpacity 
                        style={styles.btn} 
                        onPress={() => navigation.navigate('Validation')}
                        >
                        <Text style={styles.text}>Suivant</Text>
                    </TouchableOpacity>
                </View>    
        </View>
    </View>
);

export default SignUp2;

const styles = StyleSheet.create({
    ctn: {
        width:'100%',
        height:'100%',
        backgroundColor:'#F0EBE1',
        justifyContent:'center',
        alignItems:'center',
    },
    container2: {
        width:'100%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center',
    },
    container3: {
        width:'100%',
        height:'50%',
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
        marginTop:40,
        marginBottom: 10,
        fontSize: 18,
    },
    input: {
        width:'70%',
        height:'12%',
        borderWidth:1,
        borderColor: 'black',
        borderRadius: 26,
        padding: 12,
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
})