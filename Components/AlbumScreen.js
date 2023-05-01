import { StyleSheet, Text, View, Image , TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'

const AlbumScreen = () => {
  return (
    <ScrollView>
         <View style={styles.container}>
      <View style={styles.Gallery}>
        <View style={styles.Gallery2}>
          <Image style={{width: 360, height: 300,}}
          source={require('../assets/immm.jpeg')}
          />
          <Image style={{width: 360, height: 300,marginTop: 10,}}
          source={require('../assets/immm.jpeg')}
          />
          <Image style={{width: 360, height: 300,marginTop: 10,}}
          source={require('../assets/immm.jpeg')}
          />
          <Image style={{width: 360, height: 300,marginTop: 10,}}
          source={require('../assets/immm.jpeg')}
          />
          <Image style={{width: 360, height: 300,marginTop: 10,}}
          source={require('../assets/immm.jpeg')}
          />
        </View>
      </View>
    </View>
    </ScrollView>
   
  )
}

export default AlbumScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Gallery: {
    flexDirection: 'row',
  },
  Gallery2: {
    flexDirection: 'column',
  }
})