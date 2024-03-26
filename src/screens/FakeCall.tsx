import { Image, ScrollView, StyleSheet, View, FlatList } from 'react-native'
import React from 'react'

import { CustomHeader } from '../components/CustomHeader'
import { Surface, TouchableRipple, Text } from 'react-native-paper'

import { speedDial } from '../constants/constants'

import fakeCall from '../assets/phone.png'

const FakeCall = ({ props }: any) => {
  return (
    <>
      <CustomHeader {...props} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableRipple
          onPress={() => console.log('Fake Call')}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <View style={styles.fakeCallContainer}>

            <Surface
              style={styles.fakeCallCard}
              elevation={4}
            >
              <Image source={fakeCall} style={styles.fakeCallImage} />
              <Text style={styles.fakeCallText}>Fake Call</Text>
              <Text style={styles.text}>Double Tap here to generate a Fake Call.</Text>
              <Text style={styles.text}>Call your number.</Text>
            </Surface>
          </View>
        </TouchableRipple>
        <View style={styles.cardContainer}>
          <FlatList
            numColumns={2}
            data={speedDial}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableRipple
                onPress={item.onPress}
                rippleColor="rgba(0, 0, 0, .32)"
              >
                <Surface
                  style={styles.card}
                  elevation={4}
                >
                  <Image source={item.imgUrl} style={styles.image} />
                  <Text style={{ marginBottom: 4 }}>{item.name}</Text>
                  <Text>call: {item.dial}</Text>
                </Surface>
              </TouchableRipple>
            )}
          />
        </View>
      </ScrollView>
    </>
  )
}

export default FakeCall

const styles = StyleSheet.create({
  fakeCallContainer: {
    margin: 24
  },
  fakeCallCard: {
    height: 240,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fakeCallImage: {
    height: 70,
    width: 70
  },
  fakeCallText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16
  },
  cardContainer: {
    alignItems: 'center',
    marginHorizontal: 12
  },
  card: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 12
  },
  image: {
    height: 70,
    width: 70,
    marginBottom: 8
  },
  text: {
    marginTop: 12
  }
})