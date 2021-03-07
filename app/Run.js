import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import * as Location from 'expo-location';
import { getDistance, getPreciseDistance } from 'geolib';


state = {
    timer: null,
    counter: '00',
    miliseconds: '00',
    startDisabled: true,
    stopDisabled: false
}

 
export const Run = ({navigation}) =>{
 
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [stopwatchTime, setIsStopwatchTime] = useState(0);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    const [latitude , setLatitude] = useState(null);
    const [longitude , setLongitude] = useState(null);
    const [errormsg , setErrorMsg] = useState(null);
    const [dist, setDistance] = useState('');
    const [speed, setSpeed] = useState('')


    const getCoords = async function () {
        let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLatitude(location.coords.latitude);
          setLongitude(location.coords.longitude);
          var pdis = getPreciseDistance(
            { latitude: location.coords.latitude, longitude: location.coords.longitude },
            { latitude: 43.64997445025775, longitude: -79.7634220060566 }
          );
          setDistance(`Total Distance ran: ${pdis / 1000} km`);
    }
   

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
              getCoords()
            }}>
            <Text style={styles.btnText}>
              {!isStopwatchStart ? 'START RUN' : 'STOP RUN'}
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
        <View style={styles.cont}>
            <Text style={styles.subtitle}>
                {dist}
            </Text>
            <Text style={styles.subtitle}>
                Average time in km/min: {6.5}
            </Text>
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
        cont: {
            marginTop: 15
        },
        title: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 20,
          },
          subtitle: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
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
