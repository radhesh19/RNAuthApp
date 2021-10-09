import React, {useLayoutEffect,useEffect, useState} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

//Constants 
const title = "Add Item";
const title_name = "Title";
const descplaceholder = "Description";
const btnTitle = "Submit"
//Assest 
const addLottie = require('../../Assets/Lotties/Add.json')

//Main Create function
const Create = (props) => {
 
//variables  
const navigation = useNavigation();
const [titlename, setTitle] = useState('');
const [desc, setDesc] = useState('');
const [data, setData] = useState([]);
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

const getData = async () => {
    const data = await AsyncStorage.getItem('LIST_DATA');
    setData(JSON.parse(data));
}

useEffect(() => {
    getData();
  }, []);



const onSubmit = () => {
    let object = {
        title: titlename,
        body: desc,
        userId: 1,
        isChecked: false
      }
      let array = [...data];
      array.unshift(object);
      console.log(array, "dsd")
      AsyncStorage.setItem('LIST_DATA', JSON.stringify(array) );
      navigation.goBack();
}

  return (
    <KeyboardAvoidingView
        keyboardShouldPersistTaps='always'
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        style={{flexGrow: 1}}>
          <View style={styles.mainContainer}>
            <View style ={styles.inputContainer}>
            <LottieView
              autoPlay 
              loop
              source={addLottie}
              style= {styles.loginImg}
            />
              <Input 
                {...props} 
                  placeholder = {title_name} 
                  onChangeText = {(txt) => setTitle(txt)}
                />

              <Input 
                {...props} 
                isTextAres = {true}
                  secureTextEntry= {true}
                  placeholder = {descplaceholder}
                  onChangeText = {(txt) => setDesc(txt)}
              /> 

              <Button 
                  btnTitle = {btnTitle}
                  isDisable = {!desc || !titlename}
                  onPress={onSubmit}
              />
            </View>
          </View>
    </KeyboardAvoidingView>
  );
};
export default Create;
