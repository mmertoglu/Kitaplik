import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, TextInput, FlatList, ScrollView } from 'react-native'
import colors from "../../../assets/colors";
import styles from './Home.style'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import axios from 'axios'
import BookCard from "../../components/BookCard/BookCard";

const Psychology = 'https://www.googleapis.com/books/v1/volumes?q=subject:psychology&maxResults=40&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk'
const Political = 'https://www.googleapis.com/books/v1/volumes?q=subject:political&maxResults=40&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk'
const Philosophy = 'https://www.googleapis.com/books/v1/volumes?q=subject:philosophy&maxResults=40&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk'
const History = 'https://www.googleapis.com/books/v1/volumes?q=subject:history&maxResults=40&key=AIzaSyCwKBtsbYyjTxHZkxgAI5tgFRLOrvd2WLk'
const Home = () => {
    const [politicalData, setPoliticalData] = useState([])
    const [philosophyData, setPhilosophyData] = useState([])
    const [historyData, setHistoryData] = useState([])
    const [psychologyData,setPsychologyData] = useState([])

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

    const renderItem = ({ item }) => <BookCard book={item} />
    return (
        <ScrollView style={styles.container} >
            <StatusBar backgroundColor={colors.darkwhite} />
            <Text style={styles.header_text} >Bookshelter</Text>
            <View style={styles.input_container} >
                <EvilIcons name="search" color='black' size={30} />
                <TextInput placeholder="search for books..." />
            </View>
            <Text style={styles.karlmarx_text} >Political</Text>
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
            </View>
        </ScrollView>
    )
}

export default Home;