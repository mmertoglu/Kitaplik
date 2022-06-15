import React from "react";
import {View,Text, Image} from 'react-native'
import styles from './Post.style'
import { format, formatDistance, formatRelative, parseISO, subDays } from 'date-fns'
import IonIcons from 'react-native-vector-icons/Ionicons'

const Post = ({post}) => {
    const formatteddate = formatDistance(parseISO(post.date), new Date(), { 
        addSuffix: true,
    })
    return(
        <View style={styles.container} >
            <View style={styles.image_container} >
            <Image source={{uri:post.userimage}} style={styles.userimage} />
            <View>
            <Text style={styles.user_text} >{post.user}</Text>
            <View style={styles.date_container} >
            <Text style={styles.datetext} >{formatteddate}</Text>
            <IonIcons name="earth" color={'gray'} size={16} />
            </View>
            </View>
            </View>
            <Text style={styles.post_text} >{post.text}</Text>
            <View style={{height:1,backgroundColor:'black'}}></View>
            <Image source={{uri:post.image}} style={styles.post_image} resizeMode='cover' />
        </View>
    )
}

export default Post;