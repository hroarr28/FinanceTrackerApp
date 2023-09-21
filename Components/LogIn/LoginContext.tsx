import React, {createContext, useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const LoginContext = createContext({
   isLoggedIn: false,
   setIsLoggedIn: (value: boolean) => {},
   username: '',
   password: '',
   setUsername: (value: string) => {},
   setPassword: (value: string) => {},
})

export const LoginProvider: React.FC = ({children}) => {
   const [isLoggedIn, setIsLoggedIn] = React.useState(false)
   const [username, setUsername] = React.useState('')
   const [password, setPassword] = React.useState('')

   return (
      <LoginContext.Provider
         value={{
            isLoggedIn,
            setIsLoggedIn,
            username,
            password,
            setUsername,
            setPassword,
         }}>
         {children}
      </LoginContext.Provider>
   )
}

export default LoginContext
