import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import DropdownComponent from "./DropDownComponent";


const CarCleaning = () => {
  
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
    
    <SafeAreaView style={styles.container}>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
        <Image source={require("../assets/CARCL.jpg")} style={styles.image} />

        <View style={styles.PriceBox}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "black",
              marginLeft: 20,
            }}
          >
            Car Cleaning
          </Text>
         <DropdownComponent />
          <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                marginLeft: 20,
                color: "#394867",
                marginTop: 10,
              }}
            >
              1. Classic Cleaning - {""}
              <Text style={{ textDecorationLine: "line-through" }}>Rs. 599</Text>{" "}{" "}{" "}
               Rs. 399  <Text style={{color: 'red',fontSize: 16,}}>33% off</Text>
              
            </Text>
            
          <Text style={{ color: "gray", marginLeft: 20 }}>
            • Exterior shampoo wash, interior dusting + vacuuming{" "}
          </Text>
          <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                marginLeft: 20,
                color: "#394867",
                marginTop: 15,
              }}
            >
              2. Premium Cleaning - {""}
              <Text style={{ textDecorationLine: "line-through" }}>Rs. 899</Text>{" "}{" "}{" "}
               Rs. 649  <Text style={{color: 'red',fontSize: 16,}}>27% off</Text>
              
            </Text>
          <Text style={{ color: "gray", marginLeft: 20 }}>
            • Exterior shampoo wash + interior dusting + vacuuming + AC vent
            cleaning + Exterior rubbing + waxing{" "}
          </Text>
          <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                marginLeft: 20,
                color: "#394867",
                marginTop: 10,
              }}
            >
             3. Extra Premium Cleaning - {""}
              <Text style={{ textDecorationLine: "line-through" }}>Rs. 1599</Text>{" "}{" "}{" "}
               Rs. 1399  <Text style={{color: 'red',fontSize: 16,}}>12% off</Text> {'\n'}
              
            </Text>
          <Text style={{ color: "gray", marginLeft: 20 }}>
            • Exterior shampoo wash, interior dusting + vacuuming{"\n"}• AC vent
            cleaning + Exterior rubbing + waxing, All black parts polished, tyre
            cleaning, tyre degreasing
          </Text>
          <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                marginLeft: 20,
                color: "#394867",
                marginTop: 10,
              }}
            >
             4. Platinum Cleaning - {""}
              <Text style={{ textDecorationLine: "line-through" }}>Rs. 1799</Text>{" "}{" "}{" "}
               Rs. 1499  <Text style={{color: 'red',fontSize: 16,}}>16% off</Text>
              
            </Text>
          <Text style={{ color: "gray", marginLeft: 20 }}>
            • Exterior shampoo wash, Exterior rubbing + waxing + dual action
            polishing, interior dusting + vacuuming, Ac vent cleaning , All
            black parts polishing, alloy cleaning, engine steaming, tyre
            degreasing
          </Text>
          <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                marginLeft: 20,
                color: "#394867",
                marginTop: 15,
              }}
            >
             5. Car Upholstery Cleaning - {""}
              <Text style={{ textDecorationLine: "line-through" }}>Rs. 799</Text>{" "}{" "}{" "}
               Rs. 499  <Text style={{color: 'red',fontSize: 16,}}>37% off</Text>
              
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
        <View style={{ marginTop: 90 }}>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 200,
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
            • Maintains the value of your car by preventing damage and wear.
            {"\n"}
            {"\n"}• Creates a more pleasant driving experience by removing odors
            and improving air quality. {"\n"}
            {"\n"}• Reduces the risk of accidents by improving visibility and
            ensuring that windows, mirrors, and headlights are clean.
          </Text>
        </View>
        <View style={{ marginTop: 30, height: 100, flex: 1 }}>
          <TouchableOpacity style={styles.btn} onPress={displayDatepicker}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Book Now</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
      </SafeAreaView>
  );
};

export default CarCleaning;

const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 200,
    marginTop: -30,
    alignItems: "center",
  },
  container: {
    flex: 1,
    marginTop: -2,
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
    height: 250,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    marginRight: 20,
    marginLeft: 260,
    marginTop: -35,
  },
  checked: {
    width: 14,
    height: 14,
    borderRadius: 2,
    backgroundColor: "black",
  },
});
