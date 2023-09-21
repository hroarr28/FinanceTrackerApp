import React, {useState} from 'react'
import {View, Text} from 'react-native'
import CustomButton from '../Common/CustomButton'
import commonStyles from '../HomeScreen/StyleSheet/CommonStyles'
import CustomModal from '../Common/CustomModal'
import Footer from '../HomeScreen/Pages/Footer'

type DebtPaymentProps = {
   screen: string
}

const DebtPayments: React.FC<DebtPaymentProps> = ({screen}) => {
   const [show, setShow] = useState(false)

   return (
      <View style={commonStyles.screenBackground}>
         <Text style={commonStyles.text}>DebtPayments</Text>
         <CustomButton
            buttonText={'Add Expense'}
            onPress={() => setShow(true)}
         />
         {show && (
            <View>
               <CustomModal setShow={setShow} show={show} />
            </View>
         )}
         {!show && (
            <View style={commonStyles.modalContent}>
               <Footer />
            </View>
         )}
      </View>
   )
}

export default DebtPayments
