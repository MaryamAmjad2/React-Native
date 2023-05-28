import * as React from 'react';
import { Text, View, StyleSheet,Switch  } from 'react-native';
import{useState} from 'react';
import Constants from 'expo-constants';



export default function App() {

const[switchValue,setSeitchValue]=useState(true)
const toggle=()=>{
  setSeitchValue(previousState=>!previousState)
}


  return (
    <View style={styles.container}>
      <Switch
      value={switchValue}
      onValueChange={toggle}
      ></Switch>
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
