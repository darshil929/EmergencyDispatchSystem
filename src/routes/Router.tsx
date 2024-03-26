import { View, Text } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { AppwriteContext } from '../appwrite/AppwriteContext'
import Loading from '../components/Loading'

//Routes
import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'



export const Router = () => {
    const [isloading, setIsLoading] = useState<boolean>(true)
    const {appwrite, isLoggedIn, setIsLoggedIn} = useContext(AppwriteContext)

    useEffect(() => {
      appwrite
      .getCurrentUser()
      .then(response => {
        setIsLoading(false)
        if (response) {
            setIsLoggedIn(true)
        }
      })
      .catch(_ => {
        setIsLoading(false)
        setIsLoggedIn(false)
      })
    }, [appwrite, setIsLoggedIn])

    if (isloading) {
        return <Loading />
    }
    
  return (
    <NavigationContainer independent={true}>
        {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
