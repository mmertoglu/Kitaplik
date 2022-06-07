import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";

export default StyleSheet.create({
    container:{
        backgroundColor:'#a045de',
        flex:1,
    },
    header_container:{
        backgroundColor:'white',
        flex:2,
        alignItems:'center',
        justifyContent:'center',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20
    },
    body_container:{
        flex:3,
    },
    header_inner_container:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10,
        width:'100%',
        position:'absolute',
        bottom:30

    },
    login_text:{
        fontWeight:'bold',
        fontSize:16,
        color:'black'
    },
    email_text:{
        color:'white',
        marginTop:60,
        fontWeight:'bold',
        marginLeft:50,
    },
    input:{
        marginLeft:50,
        borderBottomWidth:1,
        paddingLeft:-2,
        borderBottomColor:'white',
        marginRight:50
    },
    login_button:{
        backgroundColor:'white',
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        padding:10,
        borderRadius:8,
        elevation:8,
        alignItems:'center'
    },
    button_text:{
        color:colors.pink,
        fontSize:16,
        fontWeight:'bold'
    },
    dotActive:{
        
        backgroundColor:colors.pink
    },
    dot: {
        width: 80,
        height: 10,
        borderRadius: 10,
        marginHorizontal: 5,
        
        
      },
      dotGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      controls: {
        position: 'absolute',
        width: '100%',
        bottom: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      
      },
      slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10
      },
})