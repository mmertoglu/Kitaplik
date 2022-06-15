import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        elevation:8,
        margin:10,
        alignSelf:'center',
        padding:10
        
    },
    userimage:{
        width:40,
        height:40,
        borderRadius:50
    },
    image_container:{
        flexDirection:'row',
    },
    post_image:{
        width:330,
        height:200,
        margin:5
    },
    user_text:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
        marginLeft:10
    },
    post_text:{
        color:'black',
        marginTop:10
    },
    datetext:{
        marginLeft:10,
        marginRight:4
    },
    date_container:{
        flexDirection:'row',
        alignItems:'center',
    }
})