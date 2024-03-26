import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { CustomHeader } from '../components/CustomHeader'
import { Surface, Text, TextInput, Switch } from 'react-native-paper'

const JanRakshak = ({ props }: any) => {
  const [message, setMessage] = useState<string>('')
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <>
      <CustomHeader {...props} />
      <View style={styles.upperContainer}>
        <Surface elevation={4} style={styles.contactCard}>
          <Text style={styles.contactText}>Alert Contacts?</Text>
        </Surface>
        <View style={{alignItems: 'center', marginTop: 24}}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.sosContainer}
          onPress={() => console.log('SOS')}
        >
          <Surface style={styles.surface} elevation={3}>
            <Text style={styles.sosText}>SOS</Text>
          </Surface>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.warning}>
          Are you in a situation where you cannot talk?
        </Text>
      </View>
      <TextInput
        mode="outlined"
        label="message"
        value={message}
        onChangeText={text => {
          setMessage(text)
        }}
        placeholderTextColor={'#AEAEAE'}
        placeholder="enter your message here"
        style={styles.input}
      />

    </>
  )
}

const styles = StyleSheet.create({
  upperContainer: {
    marginHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  contactCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 260,
    marginTop: 24,
    borderRadius: 8
  },
  contactText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sosContainer: {
    height: 250,
    width: 250,
    borderRadius: 250 / 2
  },
  surface: {
    backgroundColor: '#805158',
    height: 250,
    width: 250,
    borderRadius: 250 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sosText: {
    color: '#fff',
    fontSize: 56,
  },
  bottomContainer: {
    alignItems: 'center'
  },
  input: {
    marginHorizontal: 24,
    marginBottom: 24,
    height: 60
  },
  warning: {
    color: 'red',
    marginBottom: 6
  }
})

export default JanRakshak
