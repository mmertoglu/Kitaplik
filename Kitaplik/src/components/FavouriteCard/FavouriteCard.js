import React from "react";
import {View,Text,Image} from 'react-native'
import styles from './FavouriteCard.style'
const FavouriteCard = ({book}) => {
    return(
        <View style={styles.container} >
          {book.volumeInfo.imageLinks != undefined ?<Image source={{uri:book.volumeInfo.imageLinks.thumbnail}} 
            style={styles.image} />:
            <Image source={{uri:'https://www.kannemeinel.com/uploads/3/4/3/9/34391167/5133754_orig.jpg'}} style={styles.image} />
            }
            <View style={styles.inner_container} >
            <Text numberOfLines={1} style={styles.header_text} >{book.volumeInfo.title}</Text>
            <Text numberOfLines={1} style={styles.header_text} >{book.volumeInfo.authors[0]}</Text>
            </View>
        </View>
    )
}

export default FavouriteCard