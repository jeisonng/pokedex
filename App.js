/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import Routes from './src/Routes';
import SplashScreen from 'react-native-splash-screen'


const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <Routes />
  );
};

export default App;
