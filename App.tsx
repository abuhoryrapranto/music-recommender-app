import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './pages/Welcome';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Agreement from './pages/Agreement';
import QuestionOne from './pages/QuestionOne';

function App(): JSX.Element {

  const Stack = createStackNavigator();

  const backgroundStyle = {
    backgroundColor: Colors.darker
  };

  //const route = useRoute();

  const myTheme = DefaultTheme;
  myTheme.colors.background = Colors.darker;

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer theme={myTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="agreement" component={Agreement} />
          <Stack.Screen name="questionone" component={QuestionOne} />
        </Stack.Navigator>
      </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
