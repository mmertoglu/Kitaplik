import React,{useEffect,useState} from "react";
import {View,Text, TouchableOpacity, FlatList} from 'react-native'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import FavouriteCard from "../../components/FavouriteCard/FavouriteCard";
import ParseContent from "../../utils/ParseContent";

const Favourites = ({navigation}) => {
    const [favouritesList,setFavouritesList] = useState([])
    const currentUser = auth().currentUser.email.split('@',1).toString();
    const newCurrent = currentUser.replace('.','')
    useEffect(()=>{
        database().ref('users/'+newCurrent+'/Favourites').on('value', snapshot => {
            const newContentData = snapshot.val();
            const ParsedData = ParseContent(newContentData)
            setFavouritesList(ParsedData)
        })
    },[])
    const handleDetail = (book) => {
        navigation.navigate('BookDetailScreen',{book})
    }
    const removeItem = (book) => {
        const filtered = favouritesList.filter(x => x!=book)
        setFavouritesList(filtered)
        database().ref('users/'+newCurrent+'/Favourites/'+book.id).remove();
    }


    const renderItem = ({item}) => <FavouriteCard book={item} handleDetail={handleDetail} removeItem={removeItem} />
    return(
        <View style={{flex:1}} >
           <Text style={{color:'#000080',alignSelf:'center',fontSize:16,fontWeight:'bold'}} >Favourites</Text>
            <FlatList
            data={favouritesList}
            renderItem={renderItem}
            />
        </View>
    )
}

export default Favourites