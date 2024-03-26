import { FlatList, StyleSheet, View, Image, ScrollView } from 'react-native'
import React from 'react'

import { Text, Surface } from 'react-native-paper'

import { CustomHeader } from '../components/CustomHeader'
import { nearByService } from '../constants/constants'

const NearMe = ({ props }: any) => {
  return (
    <>
      <ScrollView>
        <CustomHeader {...props} />
        <View style={styles.container}>
          <Text style={styles.header}>Near By Services</Text>
          <View>
            <FlatList
              numColumns={2}
              data={nearByService}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Surface
                  style={styles.card}
                  elevation={3}
                >
                  <Image source={item.imgUrl} style={styles.image} />
                  <Text>{item.name}</Text>
                </Surface>
              )}
            />
          </View>
        </View>
      </ScrollView>
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
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 16
  },
  image: {
    height: 90,
    width: 90,
    marginBottom: 8
  },
})