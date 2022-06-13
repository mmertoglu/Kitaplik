import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Profile.style'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Profile = () => {
    const currentUser = auth().currentUser.email.split('@',1).toString();
    const [image,setImage] = useState('https://cdn-icons-png.flaticon.com/512/149/149071.png')
    return (
        <View style={styles.container} >
            <View style={styles.header_container} ></View>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.icon_container} >
            <MaterialIcons name="add-a-photo" size={30} color='black' />
            </View>
            <TouchableOpacity style={styles.edit_profile_container} >
                <Text style={styles.edit_profile_text} >Edit Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile;