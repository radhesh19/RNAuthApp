import React from 'react';
import {
  View,
  StyleSheet,
  TextInput
} from 'react-native';
import { AppColors } from '../../Theme/Colors';
import {s} from 'react-native-size-matters'
const Input = (props) => {
  const {placeholder, onChangeText,keyboardType, secureTextEntry, maxLength, isTextAres} = props;
  return (
    <View style={[styles.mainContainer, {height: isTextAres? 150 : 70,}]}>
        <TextInput 
         textAlignVertical= "top"
          placeholderTextColor = {AppColors.disabledTxt}
          placeholder = {placeholder}
          onChangeText = {onChangeText}
          keyboardType = {keyboardType}
          secureTextEntry= {secureTextEntry}
          maxLength = {maxLength}
          style ={[styles.inputs, {height:isTextAres? 120 : 50, }]}
          multiline={isTextAres}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer :{
        width: '100%',
        justifyContent:"center",
    },
    inputs: {
      width:'100%',
      fontSize: s(17),
      color: AppColors.titleTxtColor,
      paddingHorizontal: 10,
      borderTopWidth:1,
      borderBottomWidth:1, 
      borderColor : AppColors.borderColors,
      backgroundColor: AppColors.cradInputColor
    }
})



export default Input;
