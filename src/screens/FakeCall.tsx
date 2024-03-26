import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { CustomHeader } from '../components/CustomHeader'

const FakeCall = ({ props }: any) => {
  return (
      <ScrollView>
        <CustomHeader {...props} />
      </ScrollView>
  )
}

export default FakeCall

const styles = StyleSheet.create({})