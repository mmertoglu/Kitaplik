import React,{useEffect,useState} from "react";
import {View,Text, TouchableOpacity, FlatList} from 'react-native'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import ParseContent from '../../utils/ParseContent'
import FavouriteCard from "../../components/FavouriteCard/FavouriteCard";

const Favourites = () => {
    const [favouritesList,setFavouritesList] = useState([])
    const currentUser = auth().currentUser.email.split('@',1).toString();
    useEffect(()=>{
        database().ref('users/'+currentUser+'/Favourites').on('value', snapshot => {
            const newContentData = snapshot.val();
            const ParsedData = ParseContent(newContentData)
            setFavouritesList(ParsedData)
        })
    },[])

    const renderItem = ({item}) => <FavouriteCard book={item} />
    return(
        <View>
            <Text 
            style={{alignSelf:'center',color:'tomato',fontSize:24,marginTop:20,marginBottom:10,fontWeight:'bold'}} 
            >Favourites</Text>
            <FlatList
            data={favouritesList}
            renderItem={renderItem}
            />
        </View>
    )
}

export default Favourites