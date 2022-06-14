import React,{useEffect,useState} from "react";
import {View,Text,FlatList} from 'react-native'

const Shares = () =>{
    const [shares,setShares] = useState([])

    useEffect(() => {
        database().ref('users/' + newCurrent + '/Shares').on('value', snapshot => {
            const newContentData = snapshot.val();
            const ParsedData = ParseContent(newContentData)
            setShares(ParsedData)
            console.log(shares)
        })
    }, [])

    return(
        <View>
            <FlatList
            data={shares}
            renderItem={({item}) => <Text>{item.id}</Text>}
            />
        </View>
    )
}

export default Shares;