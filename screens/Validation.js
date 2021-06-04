import React from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity} from 'react-native';


const Validation = ({navigation}) => (
    <View style={styles.ctn}> 
        {/* <Text style={styles.title}></Text> */}

        {/* container principal */}
        <View style={styles.container2}>
                <Image 
                    source={require('../src/assets/icons/Va.png')}
                />
                <Text style={styles.text2}>Votre compte a été créé {'\n'}           avec succès!
        </Text>

        {/* container Bouton */}
                <View style={styles.container3}>
                    <TouchableOpacity 
                        style={styles.btn} 
                        onPress={() => navigation.navigate('SignIn')}
                        >
                        <Text style={styles.text}>Se connecter</Text>
                    </TouchableOpacity>
                </View>    
        </View>
    </View>
)

export default Validation;

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
    fontSize: 20,
    marginTop: 100
}
})