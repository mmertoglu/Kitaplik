import React,{useState,useEffect} from "react";
import {View,Text, TouchableOpacity,FlatList} from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import database from '@react-native-firebase/database'
import styles from './Social.style'
import {launchImageLibrary} from 'react-native-image-picker'
import ModalComponent from "../../components/ModalComponents/ModalComponent";
import ParseContent from '../../utils/ParseContent'
import auth from '@react-native-firebase/auth'
import Post from "../../components/Post/Post";



const Social = () => {
    
   
    const [userData,setUserData] = useState([])
    const [postData,setPostData] = useState([])
    const [postText,setPostText] = useState()
    const [postImage,setPostImage] = useState()
    const [isModalVisible,setIsModalVisible] = useState(false)

   
        useEffect(() => {
            const currentUser = auth().currentUser.email.split('@',1).toString()
            const newCurrent = currentUser.split('.', 2).toString()
            database().ref('users/' + newCurrent + '/userInfo').on('value', snapshot => {
            const contentData = snapshot.val();
            setUserData(contentData)
            })
        }, [])

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
            user:userData.username,
            date: new Date().toISOString(),
            userimage:userData.image
        }
        database().ref('Shares/'+Math.floor(Math.random()*1000)).set(post)
        setIsModalVisible(false)
        setPostImage('')
        setPostText('')
    }

    const renderItem = ({item}) => <Post post={item} />

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
            renderItem={renderItem}
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