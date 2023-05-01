import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Components/HomeScreen';
import BookingScreen from './Components/BookingScreen';
import AlbumScreen from './Components/AlbumScreen';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from './Components/ProfileScreen';
import Furniture from './Service/Furniture';
import CarCleaning from './Service/CarCleaning';
import Bathroom from './Service/Bathroom';
import Window from './Service/Window';
import FullHouse from './Service/FullHouse';
import Compound from './Service/Compound';
import CarpetCleaning from './Service/CarpetCleaning';
import ReviewScreen from './Components/ReviewScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false,
        tabBarIcon: ({size, color}) => (
          <Ionicons name="home" size={size} color={color} />
        ),
        tabBarActiveTintColor: '#5EBD9D',
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Ionicons name="bookmark" size={size} color={color} />
          ),
          tabBarActiveTintColor: '#5EBD9D',
        }}
        name="Bookings"
        component={BookingScreen} // ensure that the component name is spelled correctly
      />
      <Tab.Screen
        options={{ headerShown: true,headerTitleAlign: 'center',
          tabBarIcon: ({size, color}) => (
            <Ionicons name="albums" size={24} color={color} />
          ), tabBarActiveTintColor: '#5EBD9D'
        }}
        name="Album"
        component={AlbumScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          options={{ headerShown: false,}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tab"
          component={MyTab}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{ headerShown: true, headerTitleAlign: 'center' }}
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{ headerShown: true , headerTitleAlign: 'center'}}
          name="Furniture Cleaning"
          component={Furniture}
        />
        <Stack.Screen
          options={{ headerShown: true, headerTitleAlign: 'center' }}
          name="Car Cleaning"
          component={CarCleaning}
        />
        <Stack.Screen
          options={{ headerShown: true, headerTitleAlign: 'center' }}
          name="Bathroom/Toilet Cleaning"
          component={Bathroom}
        />
        <Stack.Screen
          options={{ headerShown: true, headerTitleAlign: 'center' }}
          name="Window Cleaning"
          component={Window}
        />
        <Stack.Screen
          options={{ headerShown: true, headerTitleAlign: 'center' }}
          name="Full House Cleaning"
          component={FullHouse}
        />
        <Stack.Screen
          options={{ headerShown: true, headerTitleAlign: 'center' }}
          name="Compound Cleaning"
          component={Compound}
        />
        <Stack.Screen
          options={{ headerShown: true, headerTitleAlign: 'center' }}
          name="Carpet Cleaning"
          component={CarpetCleaning}
        />
        <Stack.Screen
          options={{ headerShown: true, headerTitleAlign: 'center' }}
          name="Review"
          component={ReviewScreen}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
