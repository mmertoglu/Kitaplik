import React from "react";
import { View, Text, Image } from 'react-native'
import styles from './Profile.style'
import auth from '@react-native-firebase/auth'
const Profile = () => {
    return (
        <View style={styles.container} >
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} style={styles.image} />
            
        </View>
    )
}

export default Profile;