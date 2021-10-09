import { StyleSheet } from "react-native";
import {s} from 'react-native-size-matters'
import { AppColors } from "../../Theme/Colors";
const styles = StyleSheet.create({
    mainContainer : {
        flex:1, 
        padding: 15,
        backgroundColor: AppColors.appBackgriund,
    },
    headerTitle: {
        color: AppColors.titleTxtColor, 
        fontWeight: 'bold',
        fontSize : s(20),
    },
    container :{
        backgroundColor: AppColors.cardsColors,
        borderRadius: 10,
    },
    itemContainer: {
        padding: 10,
        width: '100%',
        backgroundColor: AppColors.itemCards,
        marginBottom: 10,
        borderRadius: 5, 
        flexDirection: "row"
    },
    itemTitle: {
        fontSize: s(16),
        fontWeight:'bold',
        color: AppColors.btnActiveColor
    },
    itemDesc: {
        fontSize: s(13),
        fontWeight:'600',
        marginTop: 10,
        color: AppColors.titleTxtColor
    },
    searchContainer: {
        height: s(70),
        justifyContent:"center",
    },
    searchInput: {
        height: s(40),
        width:'100%',
        borderWidth:1,
        borderRadius: 5,
        borderColor: AppColors.borderColors,
        color: AppColors.titleTxtColor,
        backgroundColor: AppColors.cardsColors,
        paddingHorizontal: 10,
        fontSize: s(17)
    },
    checkbox: {
        height: s(30),
        width: s(30),
    },
    checkContianer :{
        width: 40,
        justifyContent:"center",
        alignItems:"center"
    },
    detailsView: {
        flex: 1,
        paddingRight: 5
    },
    logoutStyle: {
        height: s(30),
        width: s(30)
    }
})

export default styles;