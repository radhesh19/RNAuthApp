import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { AppColors } from '../../Theme/Colors';
import {s} from 'react-native-size-matters'
const Button = (props) => {
    const {btnTitle, onPress, isDisable} = props;
    return (
        <View style={styles.mainContainer}>
        <TouchableOpacity
            onPress={onPress}
            disabled = {isDisable}
            style = {[styles.btnContainer, {
                backgroundColor: isDisable? AppColors.disabledTxt : AppColors.btnActiveColor
            }]}>
                <Text 
                style={[
                    styles.btnTitletxt, 
                    {color: isDisable? AppColors.disbledTxt : AppColors.titleTxtColor  
                    }]}>{btnTitle}</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer :{
        height: 100,
        width: '100%',
        justifyContent:"center",
        paddingTop: 30,
    },
    btnContainer: {
        height: 45,
        width: '100%',
        justifyContent:"center",
        alignItems:"center",
    },
    btnTitletxt: {
        fontSize: s(16),
        fontWeight: 'bold',
    }
})



export default Button;
