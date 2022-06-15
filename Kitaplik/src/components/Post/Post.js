import React from "react";
import {View,Text, Image, TouchableOpacity} from 'react-native'
import styles from './Post.style'
import { format, formatDistance, formatRelative, parseISO, subDays } from 'date-fns'
import LikeComponent from "../LikeComponent/LikeComponent";
import IonIcons from 'react-native-vector-icons/Ionicons'

const Post = ({post,handleProfile}) => {
    const formatteddate = formatDistance(parseISO(post.date), new Date(), { 
        addSuffix: true,
    })
    return(
        <View style={styles.container} >
            <TouchableOpacity onPress={() => handleProfile(post)} style={styles.image_container} >
            <Image source={{uri:post.userimage}} style={styles.userimage} />
            <View>
            <Text style={styles.user_text} >{post.userdata[0].username}</Text>
            <View style={styles.date_container} >
            <Text style={styles.datetext} >{formatteddate}</Text>
            <IonIcons name="earth" color={'gray'} size={16} />
            </View>
            </View>
            </TouchableOpacity>
            <Text style={styles.post_text} >{post.text}</Text>
            <Image source={{uri:post.image}} style={styles.post_image} resizeMode='cover' />
            <View style={styles.like_container} >
            <LikeComponent iconName='like' text='Like'  />
            <LikeComponent iconName='comment' text='Comment' />
            <LikeComponent iconName='share-google' text='Share' />
            </View>
        </View>
    )
}

export default Post;