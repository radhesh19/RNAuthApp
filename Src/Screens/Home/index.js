import React, {useLayoutEffect, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity, 
  Image
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AppColors } from "../../Theme/Colors";
import {Loader} from '../../Components';
import styles from './styles';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
//Constants 
const title = "Home";
const searchPlaceHolder = "Please search here..."
//Assests
const checkedLottie = require('../../Assets/check.png')
const logout = require( '../../Assets/signOut.png')
const addBtn = require( '../../Assets/Addbutton.png')
//Main login function
const Home = (props) => {
 
//variables  
const navigation = useNavigation();
const [data, setData] = useState([]);
const [tempData, setTmpData] = useState([]);
const [isLoading, setLoading] = useState(false);

const onlogout = () => {
  auth()
  .signOut()
  .then(() => {
    AsyncStorage.clear();
    navigation.goBack(); 
  });
}

const onAdd = () => {
 navigation.navigate("CreateScreen")
}


//Setting up the header 
useLayoutEffect(() => {
  navigation.setOptions({
    gestureEnabled: false,
    headerLeft : () => {},
    headerRight: () => (
      <View style={{flexDirection:'row'}}>
         <TouchableOpacity onPress = {onAdd}>
          <Image 
              style={[styles.logoutStyle,{ marginRight: 20}]}
          source={addBtn}
            />
          </TouchableOpacity>


        <TouchableOpacity onPress = {onlogout}>
          <Image 
            style={[styles.logoutStyle]}
            source={logout}
          />
        </TouchableOpacity>
         
       </View> 
    ),

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
  const isData = await AsyncStorage.getItem('LIST_DATA')
  if(!isData){
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(json=>{
        for(let i in json){
          json[i]['isChecked'] = false
        }
        setData(json);
        setTmpData(json);
        AsyncStorage.setItem('LIST_DATA', JSON.stringify(json));
        setTimeout(() => {
          setLoading(false);
        }, 2000);
    });
  }else{
    setData(JSON.parse(isData));
    setTmpData(JSON.parse(isData));
  }
}

useEffect(() => {
  const unsubscribe = navigation.addListener('focus', () => {
    getData();
  });

  return unsubscribe;
  }, []);


const onItmPress = (index) => {
  let array = [...data];
  array[index].isChecked = !array[index].isChecked 
  setData(array)
  AsyncStorage.setItem('LIST_DATA', JSON.stringify(array));
}


const _renderItems = ({item, index}) => {
    return(
      <TouchableOpacity onPress = {() => onItmPress(index)}>
        <View style = {styles.itemContainer}> 
            <View style={styles.detailsView}>
              <Text numberOfLines = {1} style={styles.itemTitle}>{item.title}</Text>  
              <Text numberOfLines = {3} style={styles.itemDesc}>{item.body}</Text>  
             </View>
            {item.isChecked && <View style={styles.checkContianer}>
                <Image
                  resizeMode = "contain"
                  source={checkedLottie}
                  style= {styles.checkbox}
                />
              </View>   }
        </View>
        </TouchableOpacity>
    )
}

const onSearch = (search) => {
  const data_ = tempData.length ? tempData : [];
    const filteredData = data_.filter((item) => {
      const dataTitle = item.title.toLowerCase();
      const searchTitle  = search.toLowerCase();
      return (
        dataTitle.includes(searchTitle)
      );
    });
 setData(filteredData);
}

const searchView = () => {
  return(
    <View style={styles.searchContainer}>
            <TextInput 
              style={styles.searchInput}
              placeholder= {searchPlaceHolder}
              placeholderTextColor = {AppColors.disabledTxt}
              onChangeText = {(search) => onSearch(search)}
            />
    </View>
  )
}

  return (
          <View style={styles.mainContainer}>
            {searchView()}
                <FlatList 
                    data = {data}
                    renderItem = {_renderItems}
                    keyExtractor = {(item) => item.id}
                />
            <Loader isVisible = {isLoading}/>
          </View>
  )
};
export default Home;
