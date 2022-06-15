import React from "react";
import {View,Text,StatusBar,ImageBackground,Image,TouchableOpacity} from 'react-native'
import styles from './UserProfile.style'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const UserProfile = ({route}) => {
    const {post} = route.params;
    return(
        <View style={styles.container} >
        <StatusBar backgroundColor='tomato' />
        <ImageBackground
            source={{ uri: post.userdata[0].coverimage }}
            style={styles.header_container} >
        </ImageBackground>
        <Image source={{ uri: post.userdata[0].image && post.userdata[0].image }}
            style={styles.image} />
        <Text style={styles.name_text} >{post.user}</Text>
        <View style={styles.line_container} ></View>
    </View>
    )
}

export default UserProfile