import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { CustomHeader } from '../components/CustomHeader'

const Call = ({props}: any) => {
  return (
    <CustomHeader {...props}/>
  )
}

export default Call

const styles = StyleSheet.create({})