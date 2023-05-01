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

const CarpetCleaning = () => {
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
        <Image source={require("../assets/CP.jpeg")} style={styles.image} />

        <View style={styles.PriceBox}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "600",
              color: "black",
              marginLeft: 20,
            }}
          >
            Carpet Cleaning 
          </Text>
          <Text style={{fontWeight: "500", margin: 20, color: "gray"}}>
            Price - {" "}
          <Text style={{ textDecorationLine: "line-through" }}>Rs. 23/sq.ft</Text>{" "}{" "}{" "}
               Rs. 19/sq.ft   (if less than 50sq.ft) {"  "}<Text style={{color: 'red',fontSize: 16,}}>17% off</Text>
          </Text>
          <Text style={{fontWeight: "500",marginTop: -10, marginLeft: 20, color: "gray"}}>
            Price - {" "}
          <Text style={{ textDecorationLine: "line-through" }}>Rs. 19/sq.ft</Text>{" "}{" "}{" "}
               Rs. 15/sq.ft   (if greater than 50sq.ft) {"  "}<Text style={{color: 'red',fontSize: 16,}}>21% off</Text>
          </Text>
         
          
          <Text style={{ fontWeight: "500", margin: 20, marginTop: 10, color: "gray" }}>
          • Vacuuming, shampoo, brushing and cleaning
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
            • Improve air quality as carpets can trap dust, dirt, pet dander, and other allergens.{"\n"}
            {"\n"}• Extend carpet life{" "}
            {"\n"}
            {"\n"}• Enhance the overall appearance of your space.
          </Text>
        </View>
        <View style={{ marginTop: 30, height: 100, flex: 1 }}>
          <TouchableOpacity style={styles.btn} onPress={displayDatepicker}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CarpetCleaning;

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
