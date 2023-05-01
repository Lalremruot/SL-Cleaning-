import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Share,
  Linking
} from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const ProfileScreen = ({navigation}) => {

const contactUs = () => {
  const phoneNumber = '92057 47459'; // Replace with your actual phone number
  Linking.openURL(`tel:${9205747459}`);
};

<View style={{marginTop: 30, alignItems:'center', justifyContent: 'center', flexDirection: 'row', height: 100}}>
  <Ionicons name="md-call-outline" size={22} color="black" />
  <TouchableOpacity onPress={contactUs}>
    <Text style={{fontSize: 17, fontWeight: '600', paddingLeft: 10}}>Contact Us</Text>
  </TouchableOpacity>
</View>

  const shareApp = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this awesome app!',
        url: 'https://example.com',
        title: 'SL Cleaning Service'
      }, {
        dialogTitle: 'Share this app'
      });
      if (result.action === Share.sharedAction) {
        console.log('Shared');
      } else if (result.action === Share.dismissedAction) {
        console.log('Dismissed');
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  
  return (
    // You can add more items if its necessary 
    <ScrollView>
      <View style={styles.profile}>
      <View style={styles.box}>
        {/* username and email should be display in profile when user register */}
        <Text style={styles.text}>Username</Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.text2}>Email</Text>
        <TextInput style={styles.textInput2} />

        {/* User have to manually set their Phone number,Address,Street/Road and without that they cannot book it */}

        <Text style={styles.text2}>Phone number</Text>
        <TextInput style={styles.textInput2} />
        <Text style={styles.text2}>Address</Text>
        <TextInput style={styles.textInput2} />
        <Text style={styles.text2}>Street/Road</Text>
        <TextInput style={styles.textInput2} />
        
        
        <View>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Login')}
          style={styles.logout}>
            <Text style={{color: 'white', fontWeight: '700',fontSize: 17,}}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={{marginTop: 30,alignItems:'center',justifyContent: 'center',flexDirection: 'row',height: 100,}}>
    <Ionicons name="md-call-outline" size={22} color="black" />
      <TouchableOpacity onPress={contactUs}>
        <Text style={{fontSize: 17, fontWeight: '600',paddingLeft: 10}}>Contact Us</Text>
      </TouchableOpacity>
      
    </View>
    
    <View style={{marginTop: 5,alignItems:'center',justifyContent: 'center',flexDirection: 'row', paddingBottom: 40,}}>
    <AntDesign name="sharealt" size={24} color="black" />
      <TouchableOpacity onPress={shareApp}>
        <Text style={{fontSize: 17, fontWeight: '600', paddingLeft: 10,}}>Share App</Text>
      </TouchableOpacity>
      
    </View>
    <View style={{ alignItems: "center", marginTop: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>About Us</Text>
          <Text style={{fontWeight: '500', color: 'gray', padding: 15,}}>
               SL Cleaning Service is a professional commercial and residential
            cleaning company that provides top-notch cleaning services in
            Manipur. Our Service timing is between 7Am - 6PM. Our mission is to ensure that our customers' premises are
            clean, healthy, and safe environments that enhance their
            productivity and comfort. Our services cater to both commercial and
            residential clients, and we provide affordable, high-quality
            services. {'\n'}
            {'\n'}
               Our cleaning services include general cleaning, deep
            cleaning, move-in/move-out cleaning, one-time cleaning, and ongoing
            cleaning services offered on a daily, weekly, bi-weekly, or monthly
            basis. Our cleaning team is trained to handle a variety of tasks,
            such as cleaning floors, windows, and carpets, dusting, polishing,
            vacuuming, and disinfecting surfaces, among others. We also offer
            customized cleaning services tailored to meet the specific needs and
            requirements of our clients. 
           {'\n'} 
           {'\n'}
               SL Cleaning Service aims to be the
            leading provider of professional cleaning services in Manipur. We
            are committed to offering our clients high-quality, eco-friendly,
            and affordable cleaning solutions that enhance their living and
            working environments. Through our skilled management and trained
            cleaning team, we are confident in delivering exceptional services
            and providing unrivaled customer satisfaction.
          </Text>
        </View>
    </ScrollView>
    
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
  },
  textInput: {
    borderBottomWidth: 0.7,
    borderBottomColor: "#000",
    fontSize: 16,
    width: "100%",
    marginTop: 10,
  },
  box: {
    marginTop: 30,
    marginLeft: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
  },
  textInput2: {
    borderBottomWidth: 0.7,
    borderBottomColor: "#000",
    fontSize: 16,
    width: "100%",
    marginTop: 10,
  },
  text2: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 40,
  },
  logout: {
    backgroundColor: '#5EBD9D',
    height: 40,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    marginLeft: 20,
    borderRadius: 15,

  }
});
