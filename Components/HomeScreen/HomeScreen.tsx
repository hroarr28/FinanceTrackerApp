import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {useState, useContext} from 'react'
import IncomeScreen from './Pages/IncomeScreen'
import DashBoard from './Pages/DashBoard'
import Footer from './Pages/Footer'
import commonStyles from './StyleSheet/CommonStyles'
import LoginContext from '../LogIn/LoginContext'
import UserLogin from '../LogIn/UserLogin'

const HomeScreen: React.FC = () => {
   const [income, setIncome] = useState<number | undefined>(0)
   const [monthlyBalance, setMonthlyBalance] = useState(false)
   const [screen, setScreen] = useState('')

   const LoginData = useContext(LoginContext)

   return (
      <View>
         {LoginData.isLoggedIn === false ? (
            <UserLogin />
         ) : !monthlyBalance ? (
            <View style={commonStyles.screenBackground}>
               <IncomeScreen
                  screen={screen}
                  setScreen={setScreen}
                  monthlyBalance={monthlyBalance}
                  setMonthlyBalance={setMonthlyBalance}
                  income={income}
                  setIncome={setIncome}
               />
            </View>
         ) : (
            <View style={commonStyles.screenBackground}>
               <DashBoard income={income} />
            </View>
         )}
         {LoginData.isLoggedIn === true && <Footer screen={screen} />}
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      height: '100%',
   },
})

export default HomeScreen
