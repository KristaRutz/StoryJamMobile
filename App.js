import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  unstable_enableLogBox,
} from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";

import logo from "./assets/images/logo.png";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      // <View style={styles.container}>
      //   {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      //   <NavigationContainer linking={LinkingConfiguration}>
      //     <Stack.Navigator>
      //       <Stack.Screen name="Root" component={BottomTabNavigator} />
      //     </Stack.Navigator>
      //   </NavigationContainer>
      // </View>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.message}>
          To share a photo from your phone with a friend, just press the button
          below!
        </Text>
        <TouchableOpacity
          onPress={() => alert("Hello, world!")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 22,
    marginBottom: 10,
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "mediumseagreen",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
