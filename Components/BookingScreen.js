import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const BookingScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#2A2F4F" }}>
      <View
        style={{
          marginTop: 70,
          backgroundColor: "#917F",
          paddingLeft: 10,
          width: "95%",
          borderRadius: 10,
          height: 50,
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: "#E5BEEC" }}>
          • Your booking for Furniture Cleaning Today{"\n"}Date 12/04/2023 is Confirmed
        </Text>
        <TouchableOpacity>
          
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 10,
          backgroundColor: "#917F",
          paddingLeft: 10,
          width: "95%",
          borderRadius: 10,
          height: 50,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#E5BEEC" }}>
        • Your booking for Car Cleaning Today{"\n"}Date 12/04/2023 is Confirmed
        </Text>
        
      </View>
      <View
        style={{
          marginTop: 10,
          backgroundColor: "#917F",
          paddingLeft: 10,
          width: "95%",
          borderRadius: 10,
          height: 50,
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#E5BEEC" }}>
        • Your booking for Window Cleaning Today{"\n"}Date 12/04/2023 is Confirmed
        </Text>
        
      </View>
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({});
