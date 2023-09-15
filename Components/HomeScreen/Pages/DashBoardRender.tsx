import React from 'react'
import DashBoard from './DashBoard'
import { View, Text, StyleSheet } from "react-native";

type DashBoardRenderProps = {
    income: number | undefined;
    component: any;
    };

const DashBoardRender: React.FC<DashBoardRenderProps> = ({income}) => {
    return (
       <View>
              <DashBoard income={income} />
         </View>

    )
}

export default DashBoardRender
