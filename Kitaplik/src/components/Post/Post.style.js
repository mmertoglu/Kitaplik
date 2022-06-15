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
        marginLeft:10
    },
    post_text:{
        color:'black',
        marginTop:10,
        marginBottom:10,
        marginLeft:10
    },
    datetext:{
        marginLeft:10,
        marginRight:4
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