import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import{useEffect,useState } from 'react'


export default function App() {
  const getAPI=async()=>{
    //Api Call 
    //Step 1: Store Url in variable
    const url="https://jsonplaceholder.typicode.com/posts/1";
    let res= await fetch(url);
    //Step 2: Convert Result to jason format
    res=await res.json()
    setData(res)
  }
  useEffect(()=>{
    getAPI();
  })

  const[data,setData]=useState()
  return (
    <View style={styles.container}>
<Text>API Call</Text>

//Checking If Data Exsits and Displaying it .
{
  data ? <View>
  <Text >
  <Text  style={styles.paragraph}> Id :</Text> 
   :{data.id}</Text>
    
    <Text>
    <Text  style={styles.paragraph}> title :</Text> 
   :{data.title}</Text>

   <Text>
    <Text  style={styles.paragraph}> body :</Text> 
   :{data.body}</Text>

 
  </View>  :null
}




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
