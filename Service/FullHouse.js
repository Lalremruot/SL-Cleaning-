import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropdownComponent2 from "./DropDownComponent2";

const FullHouse = () => {
  const [mydate, setDate] = useState(new Date());
  const [displaymode, setMode] = useState("date");
  const [isDisplayDate, setShow] = useState(false);
  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
    setShow(false);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const displayDatepicker = () => {
    showMode("date");
  };
  return (
    <ScrollView vertical showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <Image source={require("../assets/Full.jpg")} style={styles.image} />

        <View style={styles.PriceBox}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "600",
              color: "black",
              marginLeft: 20,
            }}
          >
            Full House Cleaning
          </Text>
          <DropdownComponent2 />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              marginLeft: 20,
              color: "#394867",
              marginTop: 10,
            }}
          >
            1. Song’s Deep Cleaning - <Text style={{ textDecorationLine: "line-through" }}>Rs. 4999</Text>{" "}{" "}{" "}
               Rs. 3499 {'\n'}<Text style={{color: 'red',fontSize: 16,}}>30% off</Text>
          </Text>
          <Text style={{ fontWeight: "500", margin: 20, color: "gray" }}>
            • Includes - single varenda, 1 sitting room, 1 bedroom, single
            kitchen, single bathroom
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              marginTop: -10,
              marginLeft: 20,
              color: "gray",
            }}
          >
            • Deep cleaning, Dusting, vacuuming, single disc cleaning, wet and
            dry wiping of furnitures.
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              marginLeft: 20,
              color: "#394867",
              marginTop: 20,
            }}
          >
            2. Sawm’s Deep Cleaning - <Text style={{ textDecorationLine: "line-through" }}>Rs. 8119</Text>{" "}{" "}{" "}
               Rs. 7119 {'\n'}<Text style={{color: 'red',fontSize: 16,}}>12% off</Text>
          </Text>
          <Text style={{ fontWeight: "500", margin: 20, color: "gray" }}>
            • Includes - single varenda, 1 sitting room, 2 bedroom, single
            kitchen, two bathroom/toilet.
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              marginTop: -10,
              marginLeft: 20,
              color: "gray",
            }}
          >
            • Deep cleaning, dusting, vacuuming, single disc floor cleaning, wet
            and dry wiping of furnitures,
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              marginLeft: 20,
              color: "#394867",
              marginTop: 20,
            }}
          >
            3. Lian’s Deep Cleaning <Text style={{ textDecorationLine: "line-through" }}>Rs. 15499</Text>{" "}{" "}{" "}
               Rs. 13499 {'\n'}<Text style={{color: 'red',fontSize: 16,}}>12% off</Text>
          </Text>
          <Text style={{ fontWeight: "500", margin: 20, color: "gray" }}>
            • Includes - single varenda, 2 sitting room, 3 bedroom, single
            kitchen, 2 bathroom/toilet.
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              marginTop: -10,
              marginLeft: 20,
              color: "gray",
            }}
          >
            • Deep cleaning, dusting, vacuuming, single disc floor cleaning, wet
            and dry wiping of furnitures, ceilings, fans, walls, stairs.
          </Text>
          
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              marginLeft: 20,
              color: "#394867",
              marginTop: 20,
            }}
          >
            4. SSL Deep Cleaning {" "}<Text style={{ textDecorationLine: "line-through" }}>Rs. 20999</Text>
            {"   "}Rs. 17999 {'\n'}<Text style={{color: 'red',fontSize: 16,}}>14% off</Text>
          </Text>
          
          <Text style={{ fontWeight: "500", margin: 20, color: "red", marginTop: 10, fontSize: 11.5,}}>
          ( Note: If area is greater than 2000/sq.ft,  Rs. 3.9/sq.ft extra will be charged. )
          </Text>
          <Text style={{ fontWeight: "500", margin: 20, color: "gray", marginTop: -10 }}>
            • Includes - 1+2+ 3 + window, mattress, sofa.
          </Text>

          {isDisplayDate && (
            <DateTimePicker
              testID="dateTimePicker"
              value={mydate}
              mode={displaymode}
              is24Hour={true}
              display="default"
              onChange={changeSelectedDate}
            />
          )}
        </View>
        <View>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 10,
              fontWeight: "600",
              fontSize: 17,
            }}
          >
            BENEFITS
          </Text>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 10,
              fontWeight: "500",
              color: "gray",
            }}
          >
            • Creates a healthier living environment by removing dust,
            allergens, and bacteria.{"\n"}
            {"\n"}• Improves the appearance and overall hygiene of {" "}your home.{" "}
            {"\n"}
            {"\n"}• Reduces stress and saves time by delegating the task to a
            professional cleaning service.
          </Text>
        </View>
        <View style={{ marginTop: 30, height: 100, flex: 1,}}>
          <TouchableOpacity style={styles.btn} onPress={displayDatepicker}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default FullHouse;

const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 200,
    marginTop: -30,
    alignItems: "center",
  },
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "white",
  },
  btn: {
    backgroundColor: "#5EBD9D",
    width: 300,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    borderRadius: 10,
    marginTop: 35,
  },
  PriceBox: {
    marginTop: 20,
    flex: 1,
  },
});
