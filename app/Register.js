import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { firebase } from '../firebase/config'

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );

export const Register = ({navigation}) =>{


    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                    distance_ran: 0,
                    calories: 0
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        alert("Registeration Successfull")
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    
        return(
            <ScreenContainer>
                <Text style={styles.login_message}>Sign Up for GroupFit</Text>
                <TextInput style={styles.input} placeholder="Full name" autoCapitalize='none' onChangeText={(text) => setFullName(text)} value={fullName}></TextInput>
                <TextInput style={styles.input2} placeholder="Username" autoCapitalize='none' onChangeText={(text) => setEmail(text)} value={email}></TextInput>
                <TextInput style={styles.input2} placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} value={password}></TextInput>
                <TextInput style={styles.input2} placeholder="Confirm Password" secureTextEntry onChangeText={(text) => setConfirmPassword(text)} value={confirmPassword}></TextInput>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.usrBtn} onPress={() => onRegisterPress()}>
                        <Text style={styles.btnText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScreenContainer>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#7e9abf'
    },
    login_message: {
      fontSize: 35,
      textAlign: 'center',
      color: '#f9aa33',
      fontWeight: 'bold',
    },
    input:{
      width: '90%',
      backgroundColor: 'white',
      padding: 15,
      marginBottom: 10,
      marginTop:25,
      borderRadius: 8
    },
    input2:{
      width: '90%',
      backgroundColor: 'white',
      padding: 15,
      marginBottom: 10,
      marginTop:5,
      borderRadius: 8
    },
    btnContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%",
      marginTop: 8
    },
    usrBtn:{
      backgroundColor: '#f9aa33',
      padding: 15,
      width: '45%',
      borderRadius: 8
    },
    btnText:{
      fontSize: 16,
      textAlign: 'center',
    }
  });

export default Register;
