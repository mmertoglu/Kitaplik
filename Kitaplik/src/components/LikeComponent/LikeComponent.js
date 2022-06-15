import React from "react";
import {View,Text} from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'


const LikeComponent = ({iconName,text}) => {
    return(
        <View style={{flexDirection:'row'}} >
        <EvilIcons name={iconName} size={24} color='gray' />
        <Text>{text}</Text>
        </View>
        
    )
}
export default LikeComponent