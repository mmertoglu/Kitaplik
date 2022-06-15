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
        marginLeft:10,
        width:220
    },
    post_image:{
        width:360,
        height:180,
        
    },
    user_text:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
        marginLeft:15
    },
    post_text:{
        color:'black',
        marginTop:20,
        marginBottom:20,
        marginLeft:10
    },
    datetext:{
        marginLeft:15,
        marginRight:4,
        fontSize:14
    },
    date_container:{
        flexDirection:'row',
        alignItems:'center',
    },
    like_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginTop:10
    }
})