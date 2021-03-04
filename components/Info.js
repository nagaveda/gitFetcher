import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
    Card,
    CardItem,
    Container,
    Spinner,
    H1,
} from 'native-base';
import { color } from "react-native-reanimated";

const Info = ({navigation, route}) => {
    const [details, setDetails] = useState(null);
    useEffect(()=>{
        const data = route.params.details;
        // console.log("TEST",data);
        setDetails(data);
        console.log("DETAILS", details);
    }, [details]);
    if(!details){
        return <Spinner />
    }
    return(
        <Container style={styles.container}>
            <Card style={styles.card}>
                <CardItem>
                    <Image 
                    style={styles.image}
                    source={{
                        uri:details?.avatar_url,
                        width:200,
                        height:200
                    }}
                    />
                </CardItem>
                <CardItem bordered>
                    <Text><H1>{details?.name}</H1></Text>
                </CardItem>
                <CardItem bordered>
                    <Text>Bio:{details?.bio}</Text>
                </CardItem>
                <CardItem bordered >
                    <Text>Followers: {details?.followers}</Text>
                </CardItem>
                <CardItem bordered>
                    <Text>Following: {details?.following}</Text>
                </CardItem>
                <CardItem bordered>
                    <Text>Location: {details?.location}</Text>
                </CardItem>
                <CardItem bordered>
                    <Text>Public Gists: {details?.public_gists}</Text>
                </CardItem>
                <CardItem >
                    <Text>Public Repos: {details?.public_repos}</Text>
                </CardItem>
                <CardItem footer bordered >
                    <TouchableOpacity style={styles.button}
                    onPress={
                        ()=>{
                            navigation.navigate("Repos", {
                                url:details.repos_url
                            })
                        }
                    }
                    >
                        <Text style={styles.buttonText}>Repos!</Text>
                    </TouchableOpacity>
                </CardItem>
                
            </Card>
            
        </Container>
    )
};
export default Info;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    card:{
        width:"100%",
        alignItems:"center"
    },
    cardItem:{
        padding:10,
        margin:10
    },
    image:{
        marginTop:-100,
        borderRadius:100
    },
    button:{
        backgroundColor:"purple",
        width:150,
        textAlign:"center",
        height:50,
        borderRadius:50
    },
    buttonText:{
        alignSelf:"center",
        justifyContent:"center",
        paddingTop:15,
        color:"white"
    }
})