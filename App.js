import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screens/Home'
import ToDoList from "./screens/ToDOList"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Smart List" component={Home}/>
      <Stack.Screen 
        name="ToDoList" 
        component={ToDoList}
        options={({route})=>{
          return({
            title: route.params.title, 
            headerStyle: {
              backgroundColor: route.params.color
            },
            headerTintColor: "white"
          })
        }}
      />
    </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}
