import React, {useEffect} from 'react'
import {
   View,
   Text,
   StyleSheet,
   ScrollView,
   Image,
   TouchableOpacity,
} from 'react-native'
import commonStyles from '../StyleSheet/CommonStyles'
import {Dimensions, SafeAreaView} from 'react-native'
import {useState} from 'react'
import {useNavigation} from '@react-navigation/native'

type DashBoardProps = {
   income: number | undefined
   component: any
}

const {width} = Dimensions.get('window')
const itemPerRow = 2
const gap = 10

const itemWidth = (width - gap * (itemPerRow - 1)) / itemPerRow

const DashBoard: React.FC<DashBoardProps> = ({income}) => {
   const [selectedCategory, setSelectedCategory] = useState<string>('')
   const [categoryIsSelected, setCategoryIsSelected] = useState<boolean>(false)
   const navigation = useNavigation()

   function balanceColor(): {color: string} {
      if (income === undefined || income === 0) {
         return {color: '#001B48'}
      } else if (income > 0) {
         return {color: '#00FF00'}
      } else if (income < 0) {
         return {color: '#FF0000'}
      }

      return {color: '#001B48'}
   }

   const items = [
      {
         id: 1,
         title: 'Housing',
         image: 'https://img.icons8.com/ios-filled/50/97cad8/house-with-a-garden.png',
         color: '#001B48',
         backgroundColor: '#02457A',
      },
      {
         id: 2,
         title: 'Transportation',
         image: 'https://img.icons8.com/glyph-neue/64/97cad8/ground-transportation.png',
         color: '#001B48',
         backgroundColor: '#02457A',
      },
      {
         id: 3,
         title: 'Food/Meals Out',
         image: 'https://img.icons8.com/ios-filled/50/97cad8/poultry-leg.png',
         color: '#001B48',
         backgroundColor: '#02457A',
      },
      {
         id: 4,
         title: 'Debt Payments',
         image: 'https://img.icons8.com/ios-filled/50/97cad8/banknotes.png',
         color: '#001B48',
         backgroundColor: '#02457A',
      },
      {
         id: 5,
         title: 'Entertainment and Recreation',
         image: 'https://img.icons8.com/ios-filled/50/97cad8/popcorn.png',
         color: '#001B48',
         backgroundColor: '#02457A',
      },
      {
         id: 6,
         title: 'Savings and Investments',
         image: 'https://img.icons8.com/ios-filled/50/97cad8/money-box--v1.png',
         color: '#001B48',
         backgroundColor: '#02457A',
      },
   ]

   //  const setCatergory = (itemId: string) => {
   //     setSelectedCategory(itemId)
   //  }

   console.log(selectedCategory)

   return (
      <SafeAreaView style={styles.container}>
         <ScrollView contentContainerStyle={styles.grid}>
            <View style={styles.header}>
               <Text style={commonStyles.text}>Monthly Balance Remaining</Text>
               <Text style={[styles.incomeText, balanceColor()]}>{income}</Text>
            </View>

            {items.map(item => (
               <View key={item.id} style={styles.wrapper}>
                  <TouchableOpacity
                     key={item.id}
                     style={[styles.singleItem]}
                     onPress={() => {
                        const screenName = item.title.replace(/\s/g, '')
                        navigation.navigate(screenName)
                        setCategoryIsSelected(true)
                     }}>
                     <Text style={styles.title}>{item.title}</Text>
                     <Image
                        style={styles.images}
                        source={{
                           uri: item.image,
                        }}
                     />
                  </TouchableOpacity>
               </View>
            ))}
         </ScrollView>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {},
   grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      marginHorizontal: 10,
      gap: 20,
   },
   header: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: 5,
      paddingTop: 20,
      paddingBottom: 20,
   },
   incomeText: {
      fontSize: 25,
      textAlign: 'center',
   },
   singleItem: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#02457A',
      borderRadius: 10,
      marginVertical: 5,
      padding: 10,
   },
   title: {
      display: 'flex',
      fontSize: 18,
      textAlign: 'center',
      paddingHorizontal: 5,
      color: '#D6E8EE',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginTop: 0,
   },
   images: {
      width: 50,
      height: 50,
      marginVertical: 5,
   },
   wrapper: {
      width: '45%',
      height: '25%',
      backgroundColor: '#02457A',
      borderRadius: 10,
   },
})

export default DashBoard
