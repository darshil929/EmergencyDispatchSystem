import React from 'react'

import { Router } from '../routes/Router';
import { AppwriteProvider } from '../appwrite/AppwriteContext';

const Account = () => {
  return (
    <AppwriteProvider>
      <Router />
    </AppwriteProvider>
  )
}

export default Account
