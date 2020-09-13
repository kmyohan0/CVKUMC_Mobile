import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./Home";
import About from "./About";
import QuiteTime from "./QuiteTime";
import NewComer from "./NewComer";

import { MainStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="QuiteTime" component={QuiteTime} />
      <Drawer.Screen name="NewComer" component={NewComer} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;