import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import React, {useState} from 'react';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.image} source={require('../assets/SLReal.png')} />
          <Text style={{fontSize: 10,fontWeight: 'bold', color: 'white', marginTop: -20,}}>YOUR CLEANING SOLUTION</Text>
          <TextInput 
            value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input} placeholder="Email" />
        
          <TextInput 
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input2} placeholder="Password" />
          <View style={{flexDirection: 'column'}}>
            
            <TouchableOpacity 
            onPress={() => navigation.navigate('Tab')}
            style={styles.btn}>

                <Text style={styles.textBtn}>Login</Text>
            </TouchableOpacity>
            <Text style={{marginTop: 15, marginLeft: 10,}}>Don't have an account yet?</Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Register')}
            style={styles.btn}>
                <Text style={styles.textBtn}>Register</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </SafeAreaView>
   
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7B7B7',
  },
  content: {
    alignItems: 'center',
    marginTop: 60,
  },
  image: {
    width: 250,
    height: 180,
    marginBottom: 10,
  },
  input: {
    
    width: '80%',
    padding: 6,
    paddingLeft: 10,
    borderRadius: 7,
    
    backgroundColor: '#eceeef',   
    marginTop: 20,
  },
  input2: {
    
    width: '80%',
    padding: 6,
    paddingLeft: 10,
    borderRadius: 7,
    
    marginTop: 20,
    backgroundColor: '#eceeef'
  },
  btn: {
    marginTop: 20,
    width: 100,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 40,
    backgroundColor: '#577D86'
    
  },
  textBtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,

  }
})
