import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import IncomeScreen from './Components/HomeScreen/Pages/IncomeScreen';
import DashBoard from './Components/HomeScreen/Pages/DashBoard';
import DashBoardRender from './Components/HomeScreen/Pages/DashBoardRender';

const RootStack = createNativeStackNavigator();


const App: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='IncomeSetter'>
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="IncomeScreen" component={IncomeScreen} />
        <RootStack.Screen name="DashBoard" component={DashBoard} />
        <RootStack.Screen name="DashBoardRender" component={DashBoardRender} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
