import React,{useState,useEffect} from "react";
import {View,Text, TouchableOpacity,FlatList} from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import database from '@react-native-firebase/database'
import styles from './Social.style'
import {launchImageLibrary} from 'react-native-image-picker'
import ModalComponent from "../../components/ModalComponents/ModalComponent";
import ParseContent from '../../utils/ParseContent'
import auth from '@react-native-firebase/auth'

const currentUser1 = auth().currentUser.email.split('@',1).toString()
const Social = () => {
    const [currentUser,setCurrentUser] = useState(currentUser1)
    const [postData,setPostData] = useState([])
    const [postText,setPostText] = useState()
    const [postImage,setPostImage] = useState()
    const [isModalVisible,setIsModalVisible] = useState(false)


    useEffect(()=>{
        database().ref('Shares').on('value',snapshot => {
            const contentData = snapshot.val();
            const newContent = ParseContent(contentData);
            setPostData(newContent)
        })
    },[])

    const closeModal = () => {
        setIsModalVisible(!isModalVisible)
    }
    const addPhoto = () => {
        const options = {
            title: 'Titlee',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        }
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('user Cancelled')
            }
            else if (response.errorCode) {
                console.log(errorCode0)
            } else {

                const path = response.assets[0].uri
                setPostImage(path)
            }
        })
    }

    const sendPost = () => {
        const post = {
            text:postText,
            image:postImage,
            user:currentUser,
            date: new Date().toISOString()
        }
        database().ref('Shares/'+postText).set(post)
        setIsModalVisible(false)
        setPostImage('')
        setPostText('')
    }

    return(
        <View style={styles.container} >
            <ModalComponent
            image={postImage}
            sendPost={sendPost}
            onChangeText={(text) => setPostText(text)}
            addPhoto={addPhoto}
            closeModal={closeModal} isVisible={isModalVisible} />
            <FlatList
            data={postData}
            renderItem={({item}) => <Text>{item.text}</Text>}
            />
            <TouchableOpacity 
            onPress={closeModal}
            style={styles.add_button} >
            <Octicons name="plus" color={'white'} size={24} />
            </TouchableOpacity>
        </View>
    )
}

export default Social