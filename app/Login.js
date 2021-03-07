import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { firebase } from '../firebase/config'

export const Login = ({navigation}) =>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLoginPress = () => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .get()
                .then(firestoreDocument => {
                    if (!firestoreDocument.exists) {
                        alert("User does not exist anymore.")
                        return;
                    }
                    const user = firestoreDocument.data()
                    navigation.push("Home")
                })
                .catch(error => {
                    alert(error)
                });
        })
        .catch(error => {
            alert(error)
        })
}


  return (
    <View style={styles.container}>
      <Text style={styles.login_message}>Welcome to GroupFit</Text>
      <Image source={require('../assets/logo.png')} style={{ marginTop: 15, width: 120, height: 120 }} />

      <TextInput style={styles.input} placeholder="Username" autoCapitalize='none' onChangeText={(text) => setEmail(text)} value={email}></TextInput>
      <TextInput style={styles.input2} placeholder="Password" autoCapitalize='none' secureTextEntry onChangeText={(text) => setPassword(text)} value={password}></TextInput>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.usrBtn}>
          <Text style={styles.btnText} onPress={() => onLoginPress()}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.usrBtn} onPress={() => navigation.push("Register")}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
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

export default Login;

