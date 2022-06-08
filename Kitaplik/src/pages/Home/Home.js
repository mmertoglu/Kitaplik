import React,{useState,useEffect} from "react";
import {View,Text,StatusBar, TextInput, FlatList} from 'react-native'
import colors from "../../../assets/colors";
import styles from './Home.style'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import axios from 'axios'
import BookCard from "../../components/BookCard/BookCard";

const Karl = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:karl+marx&maxResults=40&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk'
const Home = () => {
    const [karlData,setKarlData] = useState([])

    useEffect(() => {
        axios.get(Karl).then((response) => {
            setKarlData(response.data)
            
        })
    },[])

    const renderItem = ({item}) => <BookCard book={item} />
    return(
        <View style={styles.container} >
            <StatusBar backgroundColor={colors.darkwhite} />
            <Text style={styles.header_text} >Bookshelter</Text>
            <View style={styles.input_container} >
            <TextInput placeholder="search for books..."/>
            <EvilIcons name="search" color='black' size={30} />
            </View>
           <Text style={styles.karlmarx_text} >Karl Marx</Text>
           <View style={styles.flatlist_container} >
            <FlatList
            horizontal
            data={karlData.items}
            renderItem={renderItem}
            />
            </View>
        </View>
    )
}

export default Home;