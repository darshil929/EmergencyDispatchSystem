import { StyleSheet, View, KeyboardAvoidingView, Pressable, Platform } from 'react-native'
import React, { useContext, useState } from 'react'

import { Text, TextInput, Button } from 'react-native-paper'

//Snackbar
import Snackbar from 'react-native-snackbar'

//context API
import { AppwriteContext } from '../appwrite/AppwriteContext'

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../routes/AuthStack';

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>

const Login = ({ navigation }: LoginScreenProps) => {
  const { appwrite, setIsLoggedIn } = useContext(AppwriteContext);

  const [error, setError] = useState<string>('');

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (email.length < 1 || password.length < 1) {
      setError('All fields are required')
    } else {
      const user = {
        email,
        password
      }
      appwrite
        .login(user)
        .then((response) => {
          if (response) {
            setIsLoggedIn(true);
            Snackbar.show({
              text: 'Login Success',
              duration: Snackbar.LENGTH_SHORT
            })
          }
        })
        .catch(e => {
          console.log(e);
          setEmail('Incorrect email or password')
        })
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      >
      <View style={styles.formContainer}>
        <Text style={styles.appName}>JanRakshak</Text>

        {/* Email */}
        <TextInput
          mode="outlined"
          label="email"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
          placeholderTextColor={'#AEAEAE'}
          placeholder="enter your email"
          style={styles.input}
        />

        {/* Password */}
        <TextInput
        mode="outlined"
        label="password"
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor={'#AEAEAE'}
          placeholder="enter your password"
          style={styles.input}
          secureTextEntry
        />

        {/* Validation error */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Login button */}
        <Button
        mode='contained-tonal'
          onPress={handleLogin}
          style={[{ marginTop: error ? 10 : 20 }, {marginHorizontal: 32}]}>
          <Text style={styles.btnText}>Login</Text>
        </Button>

        {/* Sign up navigation */}
        <Pressable
          onPress={() => navigation.navigate('Signup')}
          style={styles.signUpContainer}>
          <Text style={styles.noAccountLabel}>
            Don't have an account?{'  '}
            <Text style={styles.signUpLabel}>Create an account</Text>
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
  },
  appName: {
    // color: '#f02e65',
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
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
    marginHorizontal: 32,
    marginTop: 16
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
    marginTop: 10,
  },
  btnText: {
    // color: '#484848',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signUpContainer: {
    marginTop: 40,
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
});

export default Login