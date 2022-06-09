import React,{useEffect,useState} from "react";
import {View,Text,Image, StatusBar, ScrollView, TouchableOpacity} from 'react-native'
import styles from './BookDetail.style'
import colors from "../../../assets/colors";
import Entypo from 'react-native-vector-icons/Entypo'
const BookDetail = ({route}) => {
    const [numberLines,setNumberLines] = useState(5)
    const {book} = route.params;
    return(
        <View style={styles.container} >
            <StatusBar backgroundColor={'white'} />
            <View style={styles.image_container} >
            {book.volumeInfo.imageLinks != undefined ?<Image 
            resizeMode='contain'
            source={{uri:book.volumeInfo.imageLinks.thumbnail}} 
            style={styles.image} />:
            <Image source={{uri:'https://www.kannemeinel.com/uploads/3/4/3/9/34391167/5133754_orig.jpg'}} 
            style={styles.image} />
            }
            </View>
            <ScrollView>
            <View style={styles.info_container} >
                <Text style={[styles.info_text,{color:'tomato'}]} >{book.volumeInfo.authors[0] ?  book.volumeInfo.authors[0] : null} {book.volumeInfo.authors[1] ?  book.volumeInfo.authors[1] : null}</Text>
                <Text style={[styles.info_text,{color:'black'}]} >{book.volumeInfo.title}</Text>
            </View>
            <View style={styles.favourite_container} >
                <View style={styles.favourite_inner_container} >
                    <Text style={styles.share_text} >Share</Text>
                    <Entypo name="share" size={24} color='black' />
                </View>
                <View style={styles.favourite_inner_container} >
                    <Text style={styles.share_text} >Add Favourites</Text>
                    <Entypo name="heart-outlined" size={24} color='black' />
                </View>
            </View>
            <View style={styles.book_description_container} >
                <Text style={{color:'black',fontSize:16}} >Description</Text>
                <View style={{height:1,width:'100%',backgroundColor:'black'}} ></View>
                <Text numberOfLines={numberLines} >{book.volumeInfo.description}</Text>
            </View>
            <TouchableOpacity onPress={() =>  numberLines==5? setNumberLines(40):setNumberLines(5)} style={{alignSelf:'center'}}>
                <Text>{ numberLines==5 ? 'Show More' : 'Show Less'}</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default BookDetail