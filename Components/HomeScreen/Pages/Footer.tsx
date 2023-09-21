import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import commonStyles from '../StyleSheet/CommonStyles'

type FooterProps = {
   screen: string
}

const Footer: React.FC<FooterProps> = ({screen}) => {
   const navigation = useNavigation()

   return (
      <View style={commonStyles.modalContent}>
         <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
               <View style={screen === 'DashBoard' ? styles.iconWrapper : null}>
                  <Image
                     style={styles.images}
                     source={{
                        uri: 'https://img.icons8.com/ios-filled/50/97cad8/finance.png',
                     }}
                  />
               </View>
               <Image
                  style={styles.images}
                  source={{
                     uri: 'https://img.icons8.com/ios-filled/50/97cad8/home.png',
                  }}
               />
            </TouchableOpacity>
            <View style={screen === 'Settings' ? styles.iconWrapper : null}>
               <TouchableOpacity
                  onPress={() => navigation.navigate('Settings')}>
                  <Image
                     style={styles.images}
                     source={{
                        uri: 'https://img.icons8.com/ios-filled/50/97cad8/settings.png',
                     }}
                  />
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   content: {
      height: 100,
      position: 'absolute', // Set the content to the absolute position
      bottom: 0, // Place the content at the bottom of the container
      left: 0, // Place the content on the left side of the container
      right: 0, // Place the content on the right side of the container
   },
   footerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#02457a',
      padding: 40,
      borderRadius: 50,
      marginHorizontal: 10,
      marginVertical: 10,
      zIndex: 1,
   },
   images: {
      width: 50,
      height: 50,
      position: 'absolute', // Use absolute positioning for the image
      top: '50%', // Center the image vertically
      left: '50%', // Center the image horizontally
      transform: [{translateX: -25}, {translateY: -25}], // Adjust for the image size
   },
   iconWrapper: {
      width: 85, // Adjust as needed
      height: 85, // Adjust as needed
      backgroundColor: '#018ABE',
      borderRadius: 50, // Half of the width or height to make it a circle
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2, // Adjust the border width to create the circle effect
      borderColor: '#02457a', // Adjust the border color to match the background color
      position: 'relative', // Use relative positioning for the wrapper
      padding: 10,
   },
})

export default Footer
