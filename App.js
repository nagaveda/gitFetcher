import React, {useState} from 'react';
import { ScrollView, View, Text, StyleSheet , Image, Alert} from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Home from "./components/Home";
import Info from "./components/Info";
import Repos from "./components/Repos";

const App = () => {
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title:"</>", 
          headerStyle:{
              backgroundColor:"purple",
                          
            },
           
          }}>
        </Stack.Screen>
        <Stack.Screen 
        name="Info" 
        component={Info}
        options={{
          title:"User Info", 
          headerStyle:{
              backgroundColor:"purple",
                          
            },
          }}
        >
        </Stack.Screen>
        <Stack.Screen 
        name="Repos" 
        component={Repos}
        options={{
          title:"Repositories", 
          headerStyle:{
              backgroundColor:"purple",
                          
            },
          }}
        >
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;

