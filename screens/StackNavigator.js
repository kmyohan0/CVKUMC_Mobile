import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import QuiteTime from "../screens/QuiteTime";
import NewComer from "../screens/NewComer";

let LogoTitle = () => {
  return (
    <Image 
      style={{ marginRight: 10, width: 120, height: 35 }}
      source={require('../assets/logo.png')} />
  );
}

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={({ navigation, route }) => ({
          headerTitle: "",
          headerRight: props => <LogoTitle {...props} />,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image style={{marginLeft: 10}} source={require('../assets/hamburger.png')} />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="QuiteTime" component={QuiteTime} />
      <Stack.Screen name="새신자" component={NewComer} />
    </Stack.Navigator>
  );
};
export { MainStackNavigator };

