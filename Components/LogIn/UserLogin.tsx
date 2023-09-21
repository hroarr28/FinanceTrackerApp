import React, {useState, useContext} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import CustomModal from '../Common/CustomModal'
import CustomTextInput from '../Common/CustomTextInput'
import LoginContext from './LoginContext'
import CustomButton from '../Common/CustomButton'
import commonStyles from '../HomeScreen/StyleSheet/CommonStyles'

const UserLogin: React.FC = () => {
   const [showLogin, setShowLogin] = useState(true)
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

   const handleUsername = (usernameChoice: string) => {
      setUsername(usernameChoice)
   }

   const handlePassword = (passwordChoice: string) => {
      setPassword(passwordChoice)
   }

   const LoginData = useContext(LoginContext)

   function isPasswordValid(password: string) {
      const passwordRegex =
         /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

      return passwordRegex.test(password)
   }

   function validateLogin() {
      if (isUsernameValid(username) && isPasswordValid(password)) {
         LoginData.setIsLoggedIn(true)
         LoginData.setUsername(username)
         LoginData.setPassword(password)
         setShowLogin(false)
      }
   }

   function isUsernameValid(username: string) {
      const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/

      return usernameRegex.test(username)
   }

   return (
      <View>
         <CustomModal setShow={setShowLogin} show={showLogin}>
            <Text style={commonStyles.text}>Welcome back!</Text>
            <Text style={commonStyles.h2}>
               Please enter your username and password.
            </Text>
            <View style={styles.formatLogin}>
               <Text style={commonStyles.textLeft}>Email</Text>
               <CustomTextInput
                  placeHolder={'Username'}
                  onChangeText={handleUsername}
                  value={username}
               />
               <Text style={commonStyles.textLeft}>Password</Text>
               <CustomTextInput
                  placeHolder={'Password'}
                  onChangeText={handlePassword}
                  value={password}
               />
               <CustomButton buttonText={'Login'} onPress={validateLogin} />
            </View>
         </CustomModal>
      </View>
   )
}

const styles = StyleSheet.create({
   formatLogin: {
      marginTop: 70,
      display: 'flex',
      width: '100%',
   },
})

export default UserLogin
