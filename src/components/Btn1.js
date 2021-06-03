import  React from 'react';
import { Button } from 'react-native-paper';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import SignIn from '../../screens/SignIn';

const BtnLogin = ({navigation}) => (
        <View style={styles.container}>
        <TouchableOpacity
                    style={styles.Button1}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.text}>SE CONNECTER</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Button2} 
                    sonPress={() => alert('Pressed')}
                >
                    <Text style={styles.text}>S'INSCRIRE</Text>
                </TouchableOpacity>
        </View>
);

export default BtnLogin;

const styles = StyleSheet.create ({
    container: {
        marginTop: 50,
        justifyContent:'center',
        alignItems:'center'
    },
    Button1: {
        backgroundColor:'black',
        width: 300,
        height: 70,
        marginBottom: 20,
        justifyContent:'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.5,
        elevation: 5,
        marginTop: 10,
    },
    Button2: {
        backgroundColor:'black',
        width: 300,
        height: 70,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent:'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.5,
        elevation: 5,
        marginTop: 10
    },
    text: {
        color: '#FFF'
    }
})