import { FlatList, StyleSheet, View, Image, ScrollView } from 'react-native'
import React from 'react'

import { Text, Surface, TouchableRipple } from 'react-native-paper'

import { CustomHeader } from '../components/CustomHeader'
import { nearByService } from '../constants/constants'

const NearMe = ({ props }: any) => {
  return (
    <>
      <CustomHeader {...props} />
        <View style={styles.container}>
          <Text style={styles.header}>Near By Services</Text>
          <ScrollView>
            <FlatList
              numColumns={2}
              data={nearByService}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <TouchableRipple
                  onPress={item.onPress}
                  rippleColor="rgba(0, 0, 0, .32)"
                >
                  <Surface
                    style={styles.card}
                    elevation={3}
                  >
                    <Image source={item.imgUrl} style={styles.image} />
                    <Text>{item.name}</Text>
                  </Surface>
                </TouchableRipple>
              )}
            />
          </ScrollView>
        </View>
    </>
  )
}

export default NearMe

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  card: {
    height: 160,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 12
  },
  image: {
    height: 90,
    width: 90,
    marginBottom: 8
  },
})