import { StyleSheet, View, SafeAreaView, Image } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'

import { Text, Button } from 'react-native-paper'
//Snackbar
import Snackbar from 'react-native-snackbar'

//context API
import { AppwriteContext } from '../appwrite/AppwriteContext'

type UserObj = {
  name: String;
  email: String;
}

const User = () => {
  const [userData, setUserData] = useState<UserObj>()
  const { appwrite, setIsLoggedIn } = useContext(AppwriteContext)

  const handleLogout = () => {
    appwrite.logout()
      .then(() => {
        setIsLoggedIn(false);
        Snackbar.show({
          text: 'Logout Successful',
          duration: Snackbar.LENGTH_SHORT
        })
      })
  }

  useEffect(() => {
    appwrite.getCurrentUser()
      .then(response => {
        if (response) {
          const user: UserObj = {
            name: response.name,
            email: response.email
          }
          setUserData(user)
        }
      })
  }, [appwrite])



  return (
    <SafeAreaView style={styles.container}>
        {userData && (
          <View style={styles.userContainer}>
            <Text style={styles.userDetails}>Name: {userData.name}</Text>
            <Text style={styles.userDetails}>Email: {userData.email}</Text>
          </View>
        )}

      <Button
        mode='contained-tonal'
        onPress={handleLogout}
        style={{marginHorizontal: 100}}
      >
        <Text>Logout</Text>
      </Button>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  userContainer: {
    margin: 16,
  },
  userDetails: {
    fontSize: 20,
    marginVertical: 10
  },
});

export default User