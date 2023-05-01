import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const ReviewScreen = () => {
  const [review, setReview] = useState('');
  const [reviewList, setReviewList] = useState([]);

  const handlePress = () => {
    setReviewList([...reviewList, review]);
    setReview('');
  }

  return (
    <ScrollView>
        <View>
      <TextInput
        placeholder='Write your review here'
        value={review}
        onChangeText={(text) => setReview(text)}
        multiline={true}
        underlineColorAndroid='transparent'
        numberOfLines={4}
        style={styles.input1}
      />
      <TouchableOpacity onPress={handlePress} style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
      {reviewList.map((item, index) => (
        <Text style={styles.reviewText} key={index}>{item}</Text>
      ))}
    </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  input1: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    height: 120,
    paddingBottom: 90,
  },
  submitButton: {
    backgroundColor: '#5EBD9D',
    height: 40,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    marginLeft: 30,
    borderRadius: 15,

  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
  },
  reviewText: {
    marginTop: 20,
    backgroundColor: 'white',
    height: 100,
    paddingLeft: 15,
    fontWeight: '500',
    color: 'black',
    borderColor: 'gray',
    borderWidth: 0.1,
    paddingTop: 35,

  },
});

export default ReviewScreen;
