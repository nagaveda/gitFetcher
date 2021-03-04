import React, {useState} from 'react';
import { ScrollView, View, Text, StyleSheet , Image, Alert} from 'react-native';
  
import {
  Container, 
  H1,
  Input,
  Form,
  Item,
  Label,
  Button,
  Spinner
 } from 'native-base';

import Logo from '../assets/logo.png';
import Axios from 'axios';

const Home = ({navigation, route}) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  
  const fetchData = async () => {
    if(username){
      try{
        setLoading(true);
        var data = await Axios.get(`https://api.github.com/users/${username}`);
        // console.log(data.data);
        setLoading(false);
        navigation.navigate('Info', {details:data.data})
      }catch(err){
        Alert.alert("Username Not Found!")
        setLoading(false);
      }
      

    }
    else{
      Alert.alert('Enter a valid username')
    }
    
    
  }
  return(
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <H1 style={styles.heading}>Git Fetcher&lt;\&gt;</H1>
      </View>
    <View>
    <Text>Pull some geeky stuff :)</Text>
    </View>
    <Image
    style={styles.logo}
    source={Logo}
    />
    <View style={styles.input}>
      <Text style={styles.text}>Github Username:</Text>
      <Form>
            <Item floatingLabel>
              {/* <Label>Username</Label> */}
              <Input value={username} onChangeText={text => setUsername(text)} keyboardAppearance="dark" keyboardType="default"/>
            </Item>
            <Button onPress={()=>{fetchData()}} rounded style={styles.button}>
              <Text style={{color:"black"}}>git pull</Text>
            </Button>
            {
                loading?
                (
                    <Spinner/>
                ):(<></>)
            }
      </Form>
    </View>
    
    </ScrollView>
  )
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    alignItems:"center",
    marginTop:90
  },
  heading:{
    fontSize:30,
    margin:2,
    textShadowColor: 'red',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3
  },
  logo:{
    width:200,
    height:200,
    marginTop:20,
    overflow:"visible"
  },
  input:{
    marginTop:100,
    textAlign:"center",
    padding:20
  },
  text:{
    fontSize:30
  },
  button:{
    width:"75%%",
    justifyContent:"center",
    marginTop:20,
    alignSelf:"center",
    backgroundColor:"purple",
    fontSize:20
  }
});