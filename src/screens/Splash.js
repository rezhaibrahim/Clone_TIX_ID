import React, {useEffect} from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';
import {Assets} from '../../assets'
const SplashScreenLoading = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 5000);
  });
  return (
    <>
    <StatusBar backgroundColor='#0d1c38' barStyle="light-content"/>
      <View style={style.container}>
      <Image source={Assets.logo2} style={{width: 200, height: 100}} />
      </View>
      
    </>
  );
};

export default SplashScreenLoading;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d1c38',
    
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  reverse: {
    transform: [{rotate: '135deg'}],
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
  },
});
