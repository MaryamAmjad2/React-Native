import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import {Timer} from 'react-native-stopwatch-timer'
import{useState} from 'react'


export default function App() {
  const [start,setStart]=useState(false)
  const [duration,setDuration]=useState(1500000)
  const [reset,setReset]=useState(false)
  const[status,setStatus]=useState()
  return (
    <View style={styles.container}>
    <Text style={styles.status}>{status}</Text>
      <Timer
      totalDuration={duration}
      start={start}
      reset={reset}
      
      options={options}
      ></Timer>

      <TouchableOpacity style={styles.but1}
      onPress={()=>{
        setStart(true)
        setStatus("Working")
        }}


      >
      <Text style={styles.txt}>Start Work</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.but2}
      onPress={()=>
      {setStart(false)
      setStatus("Taking A Healthy Break")
      }}
      >
      <Text  style={styles.txt}>Take Break</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.but3}
      onPress={()=>{
        setReset(true)
        setStatus('Timer Reset')
        }
        }
      >
      <Text  style={styles.txt}>Reset </Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 8,
  },
 txt: {
  
    fontSize: 15,
    fontWeight: 'bold',
    color:'white',
    textAlign:'center'
  },
  but1:{
    backgroundColor:'red',
    padding:10,
    marginTop:30,
    borderRadius:20,
    textAlign:'center',

  },
    but2:{
    backgroundColor:'green',
    padding:10,
    marginTop:30,
    borderRadius:20,
    
  },
    but3:{
    backgroundColor:'orange',
    padding:10,
    marginTop:30,
    borderRadius:20,
    textAlign:'center'
  },
  status:{
   fontSize:20,
    color:'yellow',
    textAlign:'center',
    marginBottom:50
  }
});

const options={
  container:{
    backgroundColor:'white',
    padding:20,
    borderRadius:20,
   
  },
  text:{
color:'black',
fontSize:20,
textAlign:'center'
  },
}
