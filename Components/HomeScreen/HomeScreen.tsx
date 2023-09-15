import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import IncomeScreen from "./Pages/IncomeScreen";
import DashBoard from "./Pages/DashBoard";
import Footer from "./Pages/Footer";
import commonStyles from "./StyleSheet/StyleSheet";


const HomeScreen: React.FC = () => {
    const [income, setIncome] = useState<number | undefined>(0);
    const [monthlyBalance, setMonthyBalance] = useState(false);
    const [screen, setScreen] = useState("");
    
    return (
        <View style={styles.container}>
          {!monthlyBalance ? (
            <View style={commonStyles.screenBackground}>
              <IncomeScreen
                screen={screen}
                setScreen={setScreen}
                monthlyBalance={monthlyBalance}
                setMonthlyBalance={setMonthyBalance}
                income={income}
                setIncome={setIncome}
              />
            </View>
          ) : (
            <View style={commonStyles.screenBackground}>
              <DashBoard income={income} />
            </View>
          )}
          <Footer screen={screen} />
        </View>
      );
    }

const styles = StyleSheet.create({
    container: {
        
      height: "100%",
  
    },

    });

export default HomeScreen;