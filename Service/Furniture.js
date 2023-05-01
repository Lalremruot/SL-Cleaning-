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

const Bathroom = () => {
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
        <Image
          source={require("../assets/SFCLEANING.jpg")}
          style={styles.image}
        />

        <View style={styles.PriceBox}>
          <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "600",
                color: "black",
                marginLeft: 20,
              }}
            >
              Furniture/Sofa Cleaning
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                marginLeft: 20,
                color: "gray",
                marginTop: 10,
              }}
            >
              • Furniture Cleaning - {""}
              <Text style={{ textDecorationLine: "line-through" }}>Rs. 399</Text>{" "}
              Rs. 299 {" "} <Text style={{color: 'red',fontSize: 16,}}>25% off</Text> {"\n"}
              {"\n"}• Sofa Cleaning - {''}
              <Text style={{ textDecorationLine: "line-through" }}>Rs. 799</Text>{" "}
              Rs. 549  {" "} <Text style={{color: 'red',fontSize: 16,}}>31% off</Text>
            </Text>
          </View>

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
              marginTop: 20,
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
            • Improves indoor air quality by removing dust, allergens, and
            bacteria. {"\n"}
            {"\n"}• Extends the lifespan of your furniture by preventing damage
            and wear. {"\n"}
            {"\n"}• Enhances the appearance of your furniture by removing stains
            and restoring its original beauty.
          </Text>
        </View>

        <View style={{ marginTop: 30, height: 100 }}>
          <TouchableOpacity style={styles.btn} onPress={displayDatepicker}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Bathroom;

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
