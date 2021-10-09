import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AppColors } from "../../Theme/Colors";
import LottieView from 'lottie-react-native';
import {Input, Button, Loader} from '../../Components';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Constants 
const title = "Login";
const emailPlaceholde = "abc@gmail.com";
const pwdPlaceHolder = "************";

//Assests
const loginLotti = require('../../Assets/Lotties/50124-user-profile.json')

//Main login function
const Login = (props) => {
 
//variables  
const navigation = useNavigation();
const [email, setEmail] = useState('');
const [password, setPwd] = useState('')
const [isLoading, setLoading] = useState(false);
//Setting up the header 
useLayoutEffect(() => {
  navigation.setOptions({
    headerTitle: (props) => (
      <Text {...props} style={styles.headerTitle}>
        {title}
      </Text>
    ),
    headerStyle: {
      backgroundColor: AppColors.headerBackground,
    },
  });
}, [navigation]);

useEffect(async ()=>{
let isLogin  = await AsyncStorage.getItem("isLogin"); 
  if(JSON.parse(isLogin)){
    navigation.navigate("HomeScreen")
  }

}, [])

const onSubmit = () => {
  setLoading(true)
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      setLoading(false)
      AsyncStorage.setItem('isLogin', JSON.stringify(true))
      navigation.navigate("HomeScreen")
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        alert('That email address is invalid!');
      }
      setLoading(false)
      alert(error);
    });
}


  return (
    <KeyboardAvoidingView
        keyboardShouldPersistTaps='never'
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        style={{flexGrow: 1}}>
          <View style={styles.mainContainer}>
            <View style ={styles.inputContainer}>
            <LottieView
              autoPlay 
              loop
              source={loginLotti}
              style= {styles.loginImg}
            />
              <Input 
                {...props} 
                  placeholder = {emailPlaceholde} 
                  keyboardType = "email-address"
                  onChangeText = {(txt) => setEmail(txt)}
                />

              <Input 
                {...props} 
                  secureTextEntry= {true}
                  placeholder = {pwdPlaceHolder}
                  onChangeText = {(txt) => setPwd(txt)}
              /> 

              <Button 
                  btnTitle = {title}
                  isDisable = {!email || !password}
                  onPress={onSubmit}
              />
            </View>
            <Loader isVisible = {isLoading}/>
          </View>
    </KeyboardAvoidingView>
  );
};
export default Login;
