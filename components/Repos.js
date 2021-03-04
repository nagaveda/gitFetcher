import React, {useEffect, useState} from "react";
import {Text, StyleSheet,ScrollView, Linking, TouchableOpacity} from 'react-native';
import {
    List,
    ListItem,
    Spinner,
    Left,
    Body,
    Icon,
    Button,
    View,
    Card,
    CardItem
} from 'native-base';

import Axios from 'axios';
import { set } from "react-native-reanimated";


const Repos = ({navigation, route}) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchRepos = async () => {
        const url = route.params.url;
        // console.log("URL",url);
        const data = await Axios.get(url);
        
        setRepos(data.data);
        setLoading(false)
        // console.log(data.data);
    }

    useEffect(()=>{
        fetchRepos()
    }, []);
    
    if(loading){
        return <Spinner/>
    }
    return(
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.list}>
            {
                repos.length!==0 ? 
                repos.map((repo) => (
                    <TouchableOpacity onPress={
                        ()=>{
                            try{
                                
                                Linking.openURL(repo.html_url)
                            }
                            catch (error){
                                console.log("Linking Error!");
                            }
                            
                        }
                        
                    } key={repo.name}>
                    
                    <CardItem bordered style={styles.item}>
                        <Text style={styles.text}>{repo.name}</Text>
                    </CardItem> 
                    
                </TouchableOpacity>
                ))
                :
                (
                    <>
                    <View style={styles.emptyContainer}>
                        <Text style={{fontSize:20}}>No repos!</Text>
                    </View>
                    
                    </>
                )
            }
        </View>
        </ScrollView>
    )
};

export default Repos;

const styles = StyleSheet.create({
    emptyContainer:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        alignItems:"center",
        marginTop:100
        
    },
    container:{
        flexGrow:1,
        // justifyContent:"center",
        alignItems:"center"
    },
    list:{
        width:"100%",
        marginTop:10
        // alignItems:"center"
    },
    item:{
        padding:10,
        width:"100%",
    },
    text:{
        fontSize:25
    }
    
});