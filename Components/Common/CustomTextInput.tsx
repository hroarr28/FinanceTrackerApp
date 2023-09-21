import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import commonStyles from '../HomeScreen/StyleSheet/CommonStyles'

type CustomTextInputProps = {
   placeHolder: string
   value: string
   onChangeText: (text: string) => void
}

const CustomTextInput: React.FC<CustomTextInputProps> = props => {
   return (
      <View style={styles.container}>
         <View style={commonStyles.input}>
            <TextInput
               style={styles.text}
               placeholder={props.placeHolder}
               onChangeText={props.onChangeText}
               value={props.value}
            />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
   },
   text: {
      fontSize: 20,

      color: '#d6e8ee',
      textAlign: 'center',
   },
})

export default CustomTextInput
