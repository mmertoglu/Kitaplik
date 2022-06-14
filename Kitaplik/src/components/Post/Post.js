import React from "react";
import {View,Text, Image} from 'react-native'
import styles from './Post.style'
const Post = ({post}) => {
    return(
        <View style={styles.container} >
            <View style={styles.image_container} >
            <Image source={{uri:post.userimage}} style={styles.userimage} />
            <Text style={styles.user_text} >{post.user}</Text>
            </View>
            <Text style={styles.post_text} >{post.text}</Text>
            <View style={{height:1,backgroundColor:'black'}}></View>
            <Image source={{uri:post.image}} style={styles.post_image} resizeMode='cover' />
        </View>
    )
}

export default Post;