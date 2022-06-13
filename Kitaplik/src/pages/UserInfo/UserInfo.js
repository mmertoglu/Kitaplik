import React from "react";
import {View,Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './UserInfo.style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



const UserInfo = () => {
    return(
        <View style={styles.container} >
             <FontAwesome5 name="book-reader" size={100} color='tomato' style={styles.icon} />
             <Text style={styles.header_text} >Bookshelter</Text>
            <Text>Your Name</Text>
            <View style={styles.input_container} >
            <TextInput placeholder="your name"  />
            </View>
            <Text>Your Age</Text>
            <View style={styles.input_container} >
            <TextInput placeholder="your age"  />
            </View>
            <Text>Your Image</Text>
            <TouchableOpacity style={[styles.input_container,{height:40,alignItems:'center',justifyContent:'center'}]} >
            <Text style={{color:'black'}} >Tap to upload image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.button_text} >Update Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserInfo