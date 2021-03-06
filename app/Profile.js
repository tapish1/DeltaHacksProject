import React, { Component } from 'react'
import { StyleSheet, Text, View,  } from 'react-native';

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );
 
export const Profile = ({navigation}) =>{
    return(
        <View>
            <Text>Profile</Text>
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
});

export default Profile
