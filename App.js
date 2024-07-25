import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./src/Home";
import NextScreen from "./src/NextScreen";
import Header from "./src/Header";

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header name="Home" />,
          headerRight: () => (
            <View>
              <TouchableOpacity style={{ marginLeft: 15 }}>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={28}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#00e4d0",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
      <Stack.Screen
        name="NextScreen"
        component={NextScreen}
        options={{
          headerTitle: () => <Header name="Profile" />,
          headerRight: () => (
            <View>
              <TouchableOpacity style={{ marginLeft: 15 }}>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={28}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            height: 150,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: "#026efd",
            shadowColor: "#000",
            elevation: 25,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default () => {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}
