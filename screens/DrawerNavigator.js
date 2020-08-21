import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./Home";
import About from "./About";

import { MainStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;