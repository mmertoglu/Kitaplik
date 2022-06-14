import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

export default StyleSheet.create({
    container:{
        backgroundColor:colors.darkwhite,
        flex:1,
    },
    add_button:{
        backgroundColor:'#000080',
        height:60,
        width:60,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:30,
        right:30
    }
})