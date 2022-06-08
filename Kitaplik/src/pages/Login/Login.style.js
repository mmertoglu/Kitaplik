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
      line_container1:{
          height:1,
          borderWidth:1,
          width:'40%',
          borderColor:'white',
          
      },
      line_container:{
          flexDirection:'row',
          position:'absolute',
          bottom:100,
          width:'100%',
          alignItems:'center',
          paddingHorizontal:20,
          justifyContent:'center'
      },
      or_text:{
          color:'white',
          marginRight:'5%',
          marginLeft:'5%'
      },
      google_button:{
          position:'absolute',
          bottom:30,
          alignSelf:'center',
          backgroundColor:'white',
          padding:10,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          width:'50%',
          borderRadius:8,
          elevation:10
      },
      google_image:{
          width:30,
          height:30
      },
      google_text:{
          color:'black',
          fontWeight:'bold',
      }
})