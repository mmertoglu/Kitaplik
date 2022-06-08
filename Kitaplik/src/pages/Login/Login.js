import React, { useState, createRef } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, useWindowDimensions, Image } from 'react-native'
import styles from './Login.style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import colors from "../../../assets/colors";

const data = [
    {
        page: 1,
        button_text: 'Login'
    },
    {
        page: 2,
        button_text: 'Sign-up'
    },
]

const Login = () => {
    const windowWidth = useWindowDimensions().width;
    const slider = createRef(null);
    const [sliderState, setSliderState] = useState({
        item: 0,
        offset: 0,
    });
    const slideChanged = e => {
        const item = Math.round(e.nativeEvent.contentOffset.x / windowWidth);

        setSliderState({
            item: item,
            offset: item * windowWidth,
        });
    };

    const dots = () => (
        <View style={styles.dotGroup}>
            {data.map((_, index) => (
                <View key={index} style={[styles.dot, sliderState.item === index ? styles.dotActive : null]} />
            ))}
        </View>
    );

    const switchPage = () => {
        slider.current.scrollToOffset({
            offset:  sliderState.offset - windowWidth,
            animated: true,
          }) 
    }
    
    const switchPage2 = () => {
        slider.current.scrollToOffset({
            offset:  sliderState.offset + windowWidth,
            animated: true,
          }) 
    }



    const renderItem = ({ item }) => (
        <View style={[styles.body_container, { width: windowWidth }]} >
            <Text style={styles.email_text} >E-mail</Text>
            <TextInput placeholder="your email..." placeholderTextColor='white' style={styles.input} />
            
            <Text style={[styles.email_text, { marginTop: 20 }]} >Password</Text>
            <TextInput placeholder="your password..." placeholderTextColor='white' style={styles.input} />
            
            {item.page ==2 ? <><Text style={[styles.email_text,{marginTop:20}]} >Re-password</Text>
            <TextInput placeholder="re-password..." placeholderTextColor='white' style={styles.input} /></> : null }
            <TouchableOpacity>
                {item.page==1 ?<Text style={[styles.email_text, { marginTop: 20, textDecorationLine: 'underline' }]} >Forgot password?</Text>:null}
            </TouchableOpacity>
            <TouchableOpacity style={styles.login_button} >
                <Text style={styles.button_text} >{item.button_text}</Text>
            </TouchableOpacity>
            {item.page==1 ? <View style={styles.line_container} >
            <View style={styles.line_container1} ></View>
            <Text style={styles.or_text} >or</Text>
            <View style={styles.line_container1} ></View>
            </View>:null}
            {item.page==1 ? 
            <TouchableOpacity style={styles.google_button} >
                <Image source={{uri:'https://freesvg.org/img/1534129544.png'}} style={styles.google_image} />
                <Text style={styles.google_text} >Login With Google</Text>
            </TouchableOpacity>:null}
        </View>
    )
    return (
        <View style={styles.container} >
            <View style={styles.header_container}>
                <FontAwesome5 name="book-reader" size={100} color={colors.pink} />
                <View style={styles.header_inner_container} >
                    <TouchableOpacity onPress={switchPage} >
                    <Text style={styles.login_text}  >Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={switchPage2} >
                    <Text style={styles.login_text}> Sign-up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.controls} >
                    {dots()}

                </View>
            </View>

            <FlatList
                data={data}
                renderItem={renderItem}
                ref={slider}
                keyExtractor={(_, index) => index}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={slideChanged}
                getItemLayout={(_, index) => ({
                    length: windowWidth,
                    offset: windowWidth * index,
                    index,
                })}
            />
        </View>
    )
}
export default Login