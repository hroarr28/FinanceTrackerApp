import React from 'react'
import {View, Text} from 'react-native'
import {useState} from 'react'
import DebtPayments from './DebtPayments'
import Entertainment from './Entertainment'
import Food from './Food'
import Housing from './Housing'
import Savings from './Savings'
import Transportation from './Transportation'

const SpendingCategoriesRender: React.FC = () => {
   return (
      <View>
         <Text>SpendingCategoriesRender</Text>
         <DebtPayments />
         <Entertainment />
         <Food />
         <Housing />
         <Savings />
         <Transportation />
      </View>
   )
}

export default SpendingCategoriesRender
