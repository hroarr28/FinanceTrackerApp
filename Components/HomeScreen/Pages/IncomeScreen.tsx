import React, {useEffect, useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import commonStyles from '../StyleSheet/CommonStyles'

// Define the props type

type IncomeScreenProps = {
   income: number | undefined
   setIncome: React.Dispatch<React.SetStateAction<number | undefined>>
   monthlyBalance: boolean
   setMonthlyBalance: React.Dispatch<React.SetStateAction<boolean>>
   component: any
   screen: string
   setScreen: React.Dispatch<React.SetStateAction<string>>
}

// Define the component
const IncomeScreen: React.FC<IncomeScreenProps> = ({
   income,
   setIncome,
   monthlyBalance,
   setMonthlyBalance,
   setScreen,
}) => {
   const navigation = useNavigation()

   function handleContinuePress() {
      // Check if the income is valid
      if (income === undefined || isNaN(income)) {
         Alert.alert('Please enter a valid income.')
         return
      }

      // Check if the income is positive
      if (income <= 0) {
         Alert.alert('Please enter a positive income.')
         return
      }

      if (income > 0) {
         setIncome(income)
         setMonthlyBalance(true)
      }
   }

   useEffect(() => {
      if (monthlyBalance) {
         navigation.navigate('DashBoard')
         setScreen('DashBoard')
         navigation.reset({
            index: 0,
            routes: [{name: 'DashBoard'}],
         })
      }
   }, [monthlyBalance, navigation])

   return (
      <View style={styles.container}>
         <Text style={commonStyles.text}>Welcome to FinanceTracker!</Text>
         <Text style={commonStyles.text}>Please enter your monthly income</Text>
         <TextInput
            style={commonStyles.input}
            onChangeText={text => setIncome(Number(text))}
            value={income ? income.toString() : ''}
            keyboardType="numeric" // Add this line to show the numeric keyboard
         />
         <View style={commonStyles.button}>
            <Button
               title="Continue"
               onPress={handleContinuePress}
               color={'#D6E8EE'}
               accessibilityLabel="Continue to the dashboard"
            />
         </View>
      </View>
   )
}

// Define your stylesheet
const styles = StyleSheet.create({
   container: {
      height: '100%',
      backgroundColor: '#001B48',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 100,
   },
})

export default IncomeScreen
