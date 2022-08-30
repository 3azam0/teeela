import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import  TemplateDetailsScreen from'../Screens/TemplateDetails';
import HomeScreen from '../Screens/Home';


const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="TemplateDetails"
            component={TemplateDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
