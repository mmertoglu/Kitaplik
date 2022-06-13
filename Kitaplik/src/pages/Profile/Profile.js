import React, { useState,useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import styles from './Profile.style'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import {launchImageLibrary} from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Profile = () => {
    const [userData,setUserData] = useState([])
    const currentUser = auth().currentUser.email.split('@',1).toString();
    const newCurrent = currentUser.split('.',2).toString()
    const [image,setImage] = useState('')

    useEffect(()=> {
        database().ref('users/'+newCurrent+'/userInfo').on('value',snapshot => {
            setUserData(snapshot.val())
        })
        
    },[])

    const ChangePhoto = () => {
    
        const options = {
            title:'Titlee',
            storageOptions:{
                skipBackup:true,
                path:'images'
            }
        }
       launchImageLibrary(options, response => {
       if(response.didCancel) {
           console.log('user Cancelled')
       }
       else if (response.errorCode) {
           console.log(errorCode0)
       } else {
        const path= response.assets[0].uri
        database().ref('users/'+newCurrent+'/userInfo/image').set(path)
       }
       })
    }
    return (
        <View style={styles.container} >
           <StatusBar backgroundColor='tomato' /> 
            <View style={styles.header_container} ></View>
            <Image source={{ uri: userData.image && userData.image}} 
            style={styles.image} />
            <TouchableOpacity 
            onPress={ChangePhoto}
            style={styles.icon_container} >
            <MaterialIcons name="add-a-photo" size={24} color='black' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.edit_profile_container} >
                <Text style={styles.edit_profile_text} >Edit Profile</Text>
            </TouchableOpacity>
            <Text style={styles.name_text} >{userData.username}-{userData.age}</Text>
            <View style={styles.line_container} ></View>
        </View>
    )
}

export default Profile;