import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { ScrollView, StatusBar } from "react-native";
import LocationScreen from "./LocationScreen";
import DropDownPicker from "react-native-dropdown-picker";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5EBD9D" />
      <View style={styles.header}>
        <Image
          style={styles.images}
          source={require("../assets/SLpreview.png")}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <FontAwesome
            style={{ marginRight: 27, marginTop: 35 }}
            name="user-circle-o"
            size={30}
            color="#6D5D6E"
          />
        </TouchableOpacity>
      </View>
      <LocationScreen />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 10,
        }}
      >
        <Text
          style={{
            marginTop: 10,
            marginLeft: 28,
            fontWeight: "bold",
            fontSize: 17,
            marginBottom: 10,
          }}
        >
          Services
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "gray",
            marginRight: 20,
            width: 140,
            height: 40,
            justifyContent: "center",
            borderRadius: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Review')}
            style={{
              justifyContent: "center",
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome
              style={{ marginRight: 5 }}
              name="star"
              size={24}
              color="#FF9529"
            />
            <Text style={{ fontWeight: "600" }}>Write a review</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.box1}>
          <View style={styles.box2}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Furniture Cleaning")}
              style={styles.touchable}
            >
              <Image
                source={require("../assets/SFCLEANING.jpg")}
                style={styles.image3}
              />
              <Text
                style={{
                  fontWeight: "600",
                  paddingLeft: 1,
                  fontSize: 11,
                  paddingTop: 10,
                }}
              >
                Furniture/Sofa Cleaning
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Bathroom/Toilet Cleaning")}
              style={styles.touchable}
            >
              <Image
                source={require("../assets/Bathroom-Cleaning.jpg")}
                style={styles.image3}
              />
              <Text style={{ fontWeight: "600", paddingLeft: 5, fontSize: 12 }}>
                Bathroom/Toilet Cleaning
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Full House Cleaning")}
              style={styles.touchable}
            >
              <Image
                source={require("../assets/Full.jpg")}
                style={styles.image3}
              />
              <Text
                style={{
                  fontWeight: "600",
                  paddingLeft: 3,
                  fontSize: 12,
                  paddingTop: 10,
                }}
              >
                Full House Cleaning
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Carpet Cleaning")}
              style={styles.touchable}
            >
              <Image
                source={require("../assets/CP.jpeg")}
                style={styles.image3}
              />
              <Text
                style={{
                  fontWeight: "600",
                  paddingLeft: 3,
                  fontSize: 12,
                  paddingTop: 10,
                }}
              >
                Carpet Cleaning
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.box2}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Car Cleaning")}
              style={styles.touchable}
            >
              <Image
                source={require("../assets/CARCL.jpg")}
                style={styles.image3}
              />
              <Text
                style={{
                  fontWeight: "600",
                  paddingLeft: 3,
                  paddingTop: 9,
                  fontSize: 12,
                }}
              >
                Car Cleaning
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Window Cleaning")}
              style={styles.touchable}
            >
              <Image
                source={require("../assets/WIND.jpg")}
                style={styles.image3}
              />
              <Text
                style={{
                  fontWeight: "600",
                  paddingLeft: 1,
                  fontSize: 12,
                  paddingTop: 8,
                }}
              >
                Window Cleaning
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Compound Cleaning")}
              style={styles.touchable}
            >
              <Image
                source={require("../assets/Outdoor.jpg")}
                style={styles.image3}
              />
              <Text
                style={{
                  fontWeight: "600",
                  paddingLeft: 3,
                  fontSize: 12,
                  paddingTop: 10,
                }}
              >
                Compound Cleaning
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  images: {
    width: 100,
    height: 100,
    marginTop: 6,
    marginLeft: 15,
  },

  imageView: {
    flexDirection: "row",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#5EBD9D",
    top: -20,
    height: 120,
  },
  box1: {
    flexDirection: "row",
    marginTop: 5,
    flex: 1,
    justifyContent: 'center',
  },
  box2: {
    flexDirection: "column",
    marginTop: -5,
  },
  image1: {
    width: 250,
    height: 190,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 10,
  },
  image3: {
    width: 100,
    height: 85,
    marginTop: 5,
    borderRadius: 5,
  },
  touchable: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    height: 155,
    
    borderRadius: 7,
    marginHorizontal: 15,
    marginVertical: 20,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
