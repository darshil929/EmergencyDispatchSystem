import { StyleSheet, View, KeyboardAvoidingView, Platform, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'

import { TextInput, Text, Button } from 'react-native-paper';

//Snackbar
import Snackbar from 'react-native-snackbar'
import { CustomHeader } from '../components/CustomHeader'

const Login = (props: any) => {
  const [error, setError] = useState<string>('');

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // style={styles.container}
    >
      <CustomHeader {...props} />
      <View style={styles.formContainer}>
        <Text style={styles.appName}>JanRakshak</Text>

        {/* Email */}
        <TextInput
          keyboardType="email-address"
          mode="outlined"
          label="email"
          value={email}
          // onChangeText={text => setEmail(text)}
          placeholderTextColor={'#AEAEAE'}
          placeholder="enter your email"
          style={styles.input}
        />

        {/* Password */}
        <TextInput
        mode="outlined"
        label="password"
          value={password}
          // onChangeText={text => setPassword(text)}
          placeholderTextColor={'#AEAEAE'}
          placeholder="enter your password"
          style={styles.input}
          secureTextEntry
        />

        {/* Validation error */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Button
          mode='contained-tonal'
          // onPress={handleLogin}
          style={[{marginTop: error ? 10 : 20}, {marginHorizontal: 28}]}>
          <Text style={styles.btnText}>Login</Text>
        </Button>

        <Pressable
          // onPress={() => navigation.navigate('Signup')}
          style={styles.signUpContainer}>
          <Text style={styles.noAccountLabel}>
            Don't have an account?{'  '}
            <Text style={styles.signUpLabel}>Create an account</Text>
          </Text>
        </Pressable>

      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    height: '100%',
    marginTop: 144
  },
  appName: {
    // color: '#f02e65',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    // backgroundColor: '#fef8fa',
    // padding: 10,
    // height: 40,
    // alignSelf: 'center',
    // borderRadius: 5,
    // width: '80%',
    // color: '#000000',
    // marginTop: 10,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
    // elevation: 1,
    marginHorizontal: 28,
    marginTop: 10
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#ffffff',
    padding: 10,
    height: 45,

    alignSelf: 'center',
    borderRadius: 5,
    width: '80%',
    marginTop: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 3,
  },
  btnText: {
    // color: '#484848',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signUpContainer: {
    marginTop: 80,
  },
  noAccountLabel: {
    // color: '#484848',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  signUpLabel: {
    color: '#1d9bf0',
  },
})

export default Login
