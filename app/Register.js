import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );

export const Register = ({navigation}) =>{
        return(
            <ScreenContainer>
                <Text style={styles.login_message}>Login to Group Fitness</Text>
                <TextInput style={styles.input2} placeholder="Username"></TextInput>
                <TextInput style={styles.input2} placeholder="Password" secureTextEntry></TextInput>
                <TextInput style={styles.input2} placeholder="Re-enter Password"></TextInput>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.usrBtn} onPress={() => alert("Registeration Successfull")}>
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
      fontSize: 30,
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
    },
    btnText:{
      fontSize: 16,
      textAlign: 'center',
    }
  });

export default Register;
