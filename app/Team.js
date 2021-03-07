import React, { useState } from 'react'
import { StyleSheet, Text, View,  } from 'react-native';
import { firebase } from '../firebase/config';
import Leaderboard from 'react-native-leaderboard';

this.state = {
    data: [
        {userName: 'Joe', highScore: 5},
        {userName: 'Jenny', highScore: 0.9},
        {userName: 'Tapish', highScore: 1.08},
        {userName: 'Dhruv', highScore: 0.2},
        {userName: 'Sidhu', highScore: 2},
        {userName: 'Makh', highScore: 20},
        {userName: 'Mark', highScore: 5},
        {userName: 'Sam', highScore: 10},
        {userName: 'Bupinder', highScore: 1},
        {userName: 'Juan', highScore: 4},
        {userName: 'Emily', highScore: 2},
        {userName: 'Test', highScore: 0},
        {userName: 'Test2', highScore: 5},
        {userName: 'Test3', highScore: 3.3},

    ] 
}

export const Team = ({navigation}) =>{

    const [userData, setUserData] = useState([])


    const getMarker = async function () {
         const snapshot = await firebase.firestore().collection('users').get()
         setUserData(snapshot.docs.map(doc => doc.data()))
         for(let i=0; i<userData.length; i++){
            this.state.data.push({userName: JSON.stringify(userData[i]['fullName']), highScore: JSON.stringify(userData[i]['distance_ran'])})
            //this.state.data.push({userName: 'Mark', highScore: 23})
        }
    }
   
    getMarker()
    

     
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Leaderboard</Text>
        <Leaderboard 
        data={this.state.data} 
        sortBy='highScore' 
        labelBy='userName'
        />
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
    title: {
        textAlign: 'center',
        fontSize: 40,
        color: '#f9aa33',
        margin: 10,
        fontWeight: 'bold',
        padding: 10,
      },
    HeadStyle: { 
        height: 50,
        alignContent: "center",
        backgroundColor: '#ffe0f0'
      },
      TableText: { 
        margin: 10
      }
});

export default Team
