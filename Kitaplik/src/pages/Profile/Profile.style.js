import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

export default StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:colors.darkwhite,
   
  
    },
    image:{
        width:100,
        height:100,
        backgroundColor:'red',
        borderRadius:60,
        position:'absolute',
        top:70,
        left:20,
        borderWidth:2,
        borderColor:'white'
    },
    header_container:{
      width:'100%',
      height:120,
      backgroundColor:'tomato'
    },
    edit_profile_container:{
      marginTop:20,
      alignSelf:'flex-end',
      marginRight:30,
      borderWidth:1,
      borderRadius:10,
      borderColor:'black',
      padding:8
    },
    edit_profile_text:{
      color:'black',
      fontSize:14
    },
    icon_container:{
      position:'absolute'
    }
})