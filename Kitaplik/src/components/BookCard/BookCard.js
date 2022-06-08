import React from "react";
import {View,Text,Image} from 'react-native'
import styles from './BookCard.style'

const BookCard = ({book}) => {
    return(
        <View style={styles.container} >
            {book.volumeInfo.imageLinks != undefined ?<Image source={{uri:book.volumeInfo.imageLinks.thumbnail}} 
            style={styles.image} />:null}
            <Text numberOfLines={2} style={styles.book_text} >{book.volumeInfo.title}</Text>
        </View>
    )
}

export default BookCard