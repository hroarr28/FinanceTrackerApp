import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import commonStyles from '../HomeScreen/StyleSheet/CommonStyles'

type CustomButtonProps = {
   buttonText: string
   onPress: () => void
}

const CustomButton: React.FC<CustomButtonProps> = props => {
   return (
      <TouchableOpacity onPress={props.onPress}>
         <View style={styles.container}>
            <View style={commonStyles.button}>
               <Text style={commonStyles.text}>{props.buttonText}</Text>
            </View>
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
   },
})

export default CustomButton
