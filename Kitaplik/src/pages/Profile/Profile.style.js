import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

export default StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:colors.darkwhite,
      alignItems:'center',
      justifyContent:'center'
    },
    image:{
        width:100,
        height:100,
        backgroundColor:'red',
        borderRadius:60,
    }
})