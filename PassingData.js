import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ScreenA" component={ScreenA} />
        <Stack.Screen name="ScreenB" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ScreenA = ({ navigation }) => {
  const [inputValue, setInputValue] = useState('');

  const navigateToScreenB = () => {
    navigation.navigate('ScreenB', { data: inputValue });
  };

  return (
    <View>
      <TextInput
        placeholder="Enter text"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Go to Screen B" onPress={navigateToScreenB} />
    </View>
  );
};

const ScreenB = ({ route }) => {
  const { data } = route.params;

  return (
    <View>
      <Text>Input Value: {data}</Text>
    </View>
  );
};

export default App;
