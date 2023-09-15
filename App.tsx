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

const RootStack = createNativeStackNavigator()

const App: React.FC = () => {
   return (
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
            <RootStack.Screen name="Entertainment" component={Entertainment} />
            <RootStack.Screen name="Food" component={Food} />
            <RootStack.Screen name="Housing" component={Housing} />
            <RootStack.Screen name="Savings" component={Savings} />
            <RootStack.Screen
               name="Transportation"
               component={Transportation}
            />
         </RootStack.Navigator>
      </NavigationContainer>
   )
}

export default App
