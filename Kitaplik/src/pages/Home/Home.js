import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, TextInput, FlatList, ScrollView,TouchableOpacity } from 'react-native'
import colors from "../../../assets/colors";
import styles from './Home.style'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import axios from 'axios'
import BookCard from "../../components/BookCard/BookCard";
import SearchedBookCard from "../../components/SearchedBookCard/SearchedBookCard";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth'

const Psychology = 'https://www.googleapis.com/books/v1/volumes?q=subject:psychology&maxResults=40&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk'
const Political = 'https://www.googleapis.com/books/v1/volumes?q=subject:political&maxResults=40&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk'
const Philosophy = 'https://www.googleapis.com/books/v1/volumes?q=subject:philosophy&maxResults=40&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk'
const History = 'https://www.googleapis.com/books/v1/volumes?q=subject:history&maxResults=40&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk'
const Home = ({navigation}) => {
    const [politicalData, setPoliticalData] = useState([])
    const [philosophyData, setPhilosophyData] = useState([])
    const [historyData, setHistoryData] = useState([])
    const [psychologyData,setPsychologyData] = useState([])
    const [resultData,setResultData] = useState([])
    const [search,setSearch] = useState('')
    const result = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk`

    useEffect(() => {
        axios.get(Political).then((response) => {
            setPoliticalData(response.data)
        })
    }, [])
    useEffect(() => {
        axios.get(Philosophy).then((response) => {
            setPhilosophyData(response.data)
        })
    }, [])
    useEffect(() => {
        axios.get(History).then((response) => {
            setHistoryData(response.data)
        })

    }, [])
    useEffect(() => {
        axios.get(Psychology).then((response) => {
            setPsychologyData(response.data)
        })

    }, [])
    const handleSearch = async (text) => {
       try {
        await setSearch(text)
        axios.get(result).then((response) => {
            setResultData(response.data)
            console.log(resultData)
        })

        const filtered = resultData.filter((book) => {
            const current = book.items.volumeInfo.title
            return current.indexOf(text)> -1
        })
        text?setResultData(filtered):setResultData([])
       } catch (error) {
           console.log(error)
       }
    }

    const goBookDetail = (book) => {
        navigation.navigate('BookDetailScreen',{book})
    }
    const cikisyap = async () => {
     try {
        const currentUser = auth().currentUser
        if (currentUser) {
           await auth().signOut();
            navigation.navigate('LoginScreen')
        }
        else {
            await GoogleSignin.signOut();
            navigation.navigate('LoginScreen')

        }
       
        
        
     } catch (error) {
        console.log(error)
     }
    }

    const renderItem = ({ item }) => <BookCard book={item} handleDetail={goBookDetail} />
    return (
        <ScrollView style={styles.container} >
             <TouchableOpacity onPress={cikisyap} style={{backgroundColor:'yellow'}}>
                <Text>Çıkış Yap</Text>
            </TouchableOpacity>
            <StatusBar backgroundColor={colors.darkwhite} />
            <Text style={styles.header_text} >Bookshelter</Text>
            <View style={styles.input_container} >
                <EvilIcons name="search" color='black' size={30} />
                <TextInput 
                style={{width:280}}
                value={search}
                autoCapitalize='none' placeholder="search for books..." onChangeText={handleSearch} />
            </View>
          {!search? <><Text style={styles.karlmarx_text} >Political</Text>
            <View style={styles.flatlist_container} >
                <FlatList
                    horizontal
                    data={politicalData.items}
                    renderItem={renderItem}
                />
            </View>
            <Text style={styles.karlmarx_text} >Philosophy</Text>
            <View style={styles.flatlist_container} >
                <FlatList
                    horizontal
                    data={philosophyData.items}
                    renderItem={renderItem}
                />
            </View>
            <Text style={styles.karlmarx_text} >History</Text>
            <View style={styles.flatlist_container} >
                <FlatList
                    horizontal
                    data={historyData.items}
                    renderItem={renderItem}
                />
            </View>
            <Text style={styles.karlmarx_text} >Psychology</Text>
            <View style={styles.flatlist_container} >
                <FlatList
                    horizontal
                    data={psychologyData.items}
                    renderItem={renderItem}
                />
            </View></>
        :  
        <FlatList
        style={{marginTop:20}}
        numColumns={3}
        data={resultData.items}
        renderItem={({item}) => <SearchedBookCard book={item} onPress={goBookDetail} />}
        />  
        }
          
        </ScrollView>
    )
}

export default Home;