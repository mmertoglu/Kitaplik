import React from "react";
import {View,Text, Image} from 'react-native'
import styles from './SearchedBookCard.style'
const SearchedBookCard = ({book}) => {
    return(
        <View style={styles.container} >
            {book.volumeInfo.imageLinks != undefined ?<Image 
            resizeMode='stretch'
            source={{uri:book.volumeInfo.imageLinks.thumbnail}} 
            style={styles.image} />:
            <Image source={{uri:'https://www.kannemeinel.com/uploads/3/4/3/9/34391167/5133754_orig.jpg'}} 
            style={styles.image} />
            }
            <Text numberOfLines={2} style={styles.book_text} >{book.volumeInfo.title}</Text>
        </View>
    )
}
export default SearchedBookCard