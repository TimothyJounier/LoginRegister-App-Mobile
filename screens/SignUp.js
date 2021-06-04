import React from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity} from 'react-native';


const SignUp = ({navigation}) => (

    <View style={styles.ctn}> 
        {/* <Text style={styles.title}></Text> */}

        {/* container champs */}
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
                    <Text style={styles.text2}>Confirmation du mot de passe</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Entrez votre mot de passe"
                    />

        {/* container Bouton */}
                <View style={styles.container3}>
                    <TouchableOpacity 
                        style={styles.btn} 
                        onPress={() => navigation.navigate('SignUp2')}
                        >
                    <Text style={styles.text}>Suivant</Text>
                </TouchableOpacity>
                </View>
                    
                </View>
    </View>
);

export default SignUp;

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
    // title: {
    //     paddingBottom: 100,
    //     fontSize: 30
    // },
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