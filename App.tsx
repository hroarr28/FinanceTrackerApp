import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './Components/HomeScreen/HomeScreen'
import IncomeScreen from './Components/HomeScreen/Pages/IncomeScreen'
import DashBoard from './Components/HomeScreen/Pages/DashBoard'
import DashBoardRender from './Components/HomeScreen/Pages/DashBoardRender'
import DebtPayments from './Components/SpendingCatergories/DebtPayments'
import Entertainment from './Components/SpendingCatergories/Entertainment'
import Food from './Components/SpendingCatergories/Food'
import Housing from './Components/SpendingCatergories/Housing'
import Savings from './Components/SpendingCatergories/Savings'
import Transportation from './Components/SpendingCatergories/Transportation'
import LoginContext from './Components/LogIn/LoginContext'

const RootStack = createNativeStackNavigator()

const LoginData = {
   isLoggedIn: false,
   setIsLoggedIn: (isLoggedIn: boolean) => {},
}

const App: React.FC = () => {
   return (
      <LoginContext.Provider
         password={''}
         username={''}
         setIsLoggedIn={false}
         isLoggedIn={false}
         setUsername={''}
         setPassword={''}
         value={LoginData}>
         <NavigationContainer>
            <RootStack.Navigator initialRouteName="IncomeSetter">
               <RootStack.Screen name="HomeScreen" component={HomeScreen} />
               <RootStack.Screen name="IncomeScreen" component={IncomeScreen} />
               <RootStack.Screen name="DashBoard" component={DashBoard} />
               <RootStack.Screen
                  name="DashBoardRender"
                  component={DashBoardRender}
               />
               <RootStack.Screen name="DebtPayments" component={DebtPayments} />
               <RootStack.Screen
                  name="EntertainmentandRecreation"
                  component={Entertainment}
               />
               <RootStack.Screen name="Food/MealsOut" component={Food} />
               <RootStack.Screen name="Housing" component={Housing} />
               <RootStack.Screen
                  name="SavingsandInvestments"
                  component={Savings}
               />
               <RootStack.Screen
                  name="Transportation"
                  component={Transportation}
               />
            </RootStack.Navigator>
         </NavigationContainer>
      </LoginContext.Provider>
   )
}

export default App
