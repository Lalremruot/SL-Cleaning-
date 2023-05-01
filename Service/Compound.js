import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Button,
  ScrollView
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
    <ScrollView vertical showsVerticalScrollIndicator={false} >
        <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/Outdoor.jpg")}
        style={styles.image}
      />

      <View style={styles.PriceBox}>
        <Text style={{ fontSize: 17, fontWeight: "600", color: 'black', marginLeft: 20, }}>
          Compound Cleaning</Text>
          <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                marginLeft: 20,
                color: "gray",
                marginTop: 10,
              }}
            >
              Price - {""}
              <Text style={{ textDecorationLine: "line-through" }}>Rs. 13/sq.ft</Text>{" "}{" "}
              Rs. 9/sq.ft    <Text style={{color: 'red',fontSize: 16,}}>30% off</Text>
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
        <Text style={{marginLeft: 20,marginTop: 20,fontWeight: '600', fontSize: 17,}}>BENEFITS</Text>
        <Text style={{marginLeft: 20,marginTop: 10,fontWeight: '500', color: 'gray'}} >
          • Creates a more attractive and welcoming outdoor space by removing dirt, debris, and stains. {'\n'}
          {'\n'}
          • Reduces the risk of slips, trips, and falls by keeping walkways and driveways clean and clear. {'\n'}
          {'\n'}
          • Prevents damage to outdoor surfaces by removing buildup and preventing corrosion.

        </Text>
      </View>
      <View style={{marginTop: 30,height: 120,flex: 1}}>
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
         
  }
});
