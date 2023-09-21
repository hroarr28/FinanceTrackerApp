import React, {useState} from 'react'
import {
   View,
   Text,
   TextInput,
   StyleSheet,
   Modal,
   TouchableOpacity,
   Image,
} from 'react-native'
import commonStyles from '../HomeScreen/StyleSheet/CommonStyles'
import modalStyles from '../HomeScreen/StyleSheet/ModalStyles'

type ModalProps = {
   show: boolean
   setShow: (show: boolean) => void
   children?: React.ReactNode
}

const CustomModal: React.FC<ModalProps> = props => {
   const [backDropClicked, setBackDropClicked] = useState(false)

   const handleClose = () => {
      props.setShow(false)
   }

   console.log(props.show)
   return (
      <Modal animationType="slide" transparent={true} visible={props.show}>
         <View style={styles.container}>
            <TouchableOpacity
               onPress={() => {
                  handleClose()
               }}>
               <View style={modalStyles.modalBackdrop}></View>
            </TouchableOpacity>
            <View style={modalStyles.modalBackground}>
               <View style={modalStyles.modal}>
                  <TouchableOpacity
                     onPress={() => {
                        handleClose()
                     }}>
                     <Image
                        style={styles.closeIcon}
                        source={{
                           uri: 'https://img.icons8.com/metro/26/d6e8ee/delete-sign.png',
                        }}
                     />
                  </TouchableOpacity>
                  <View>{props.children}</View>
               </View>
            </View>
         </View>
      </Modal>
   )
}
const styles = StyleSheet.create({
   container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
   },
   closeIcon: {
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 10,
      height: 25,
      alignContent: 'center',
   },
})

export default CustomModal
