import React, { useState } from 'react'
import { StyleSheet, Text, View,  } from 'react-native';
import { firebase } from '../firebase/config';
import Leaderboard from 'react-native-leaderboard';

this.state = {
    data: [
        {userName: 'Joe', highScore: 52},
        {userName: 'Jenny', highScore: 120},
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

    this.state.data.push({userName: 'Tapish', highScore: 82})
    this.state.data.push({userName: 'Makh', highScore: 75})
    this.state.data.push({userName: 'Dhruv', highScore: 21})
    this.state.data.push({userName: 'Siddu', highScore: 16})
    this.state.data.push({userName: 'Joe', highScore: 82})


    

     
    return(
        <View style={styles.container}>
            <Text>LeaderBoard</Text>
            <Text>{userData.length}</Text>
        <Leaderboard 
        data={this.state.data} 
        sortBy='highScore' 
        labelBy='userName'/>
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
