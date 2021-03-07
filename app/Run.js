import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { Location, Permissions} from 'expo';
state = {
    location: null,
    timer: null,
    counter: '00',
    miliseconds: '00',
    startDisabled: true,
    stopDisabled: false,
    errorMessage: '',
    
}

 
export const Run = ({navigation}) =>{
 
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [stopwatchTime, setIsStopwatchTime] = useState(0);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    
    findCoordinates = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const location = JSON.stringify(position);
  
          this.setState({ location });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };


    return (
        <View style={styles.container}>
            <Stopwatch
                laps
                start={isStopwatchStart}
                //To start
                reset={resetStopwatch}
                //To reset
                options={options}
                //options for the styling
                getTime={(time) => {
                    setIsStopwatchTime(time)
                }}
          />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.usrBtn}
            onPress={() => {
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}>
            <Text style={styles.btnText}>
              {!isStopwatchStart ? 'START' : 'STOP'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.usrBtn}
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
            }}>
            <Text style={styles.btnText}>RESET</Text>
          </TouchableOpacity>
        </View>
        <View> 

        <View style={styles.container}>
          <TouchableOpacity onPress={this.findCoordinates}>
            <Text style={styles.welcome}>Find My Coords?</Text>
            <Text>Location: {this.state.location}</Text>
          </TouchableOpacity>
			</View>
        </View>
        </View>
    )}

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
            fontSize: 20,
            fontWeight: 'bold',
            padding: 20,
          },
          sectionStyle: {
            flex: 1,
            marginTop: 32,
            alignItems: 'center',
            justifyContent: 'center',
          },
          btnContainer:{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            marginTop: 8,
            marginLeft: 5
          },
          usrBtn:{
            marginTop: 10,
            backgroundColor: '#f9aa33',
            padding: 10,
            width: '45%',
            borderRadius: 5
          },
          btnText:{
            fontSize: 18,
            textAlign: 'center',
          }
    });

    const options = {
        container: {
          padding: 5,
          width: 250,
          alignItems: 'center',
        },
        text: {
          fontSize: 50,
          color: 'black',
          marginLeft: 7,
        },
      };
    
export default Run

       