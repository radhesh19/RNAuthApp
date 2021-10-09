import { StyleSheet } from "react-native";
import {s} from 'react-native-size-matters'
import { AppColors } from "../../Theme/Colors";
const styles = StyleSheet.create({
    mainContainer : {
        flex:1, 
        backgroundColor: AppColors.appBackgriund,
        padding: 20
    },
    headerTitle: {
        color: AppColors.titleTxtColor, 
        fontWeight: 'bold',
        fontSize : s(20),
    },
    inputContainer :{
        paddingVertical: 50,
        backgroundColor: AppColors.cardsColors,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    loginImg: {
        height: s(200),
        width: s(200),
    }
})

export default styles;