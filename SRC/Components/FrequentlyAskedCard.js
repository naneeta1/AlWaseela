import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'
import Color from '../Assets/Utilities/Color'
import { windowWidth } from '../Utillity/utils'
import CustomText from './CustomText'
import { Icon } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'

const FrequentlyAskedCard = ({question , answer}) => {
    const [showAnswer , setShowAnswer] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <CustomText 
         style={{
            width : windowWidth * 0.6 ,
            lineHeight : moderateScale(20,0.3),
            fontSize : moderateScale(14,0.6)
        }}
        >{question}</CustomText>
        <Icon 
        name={showAnswer ? 'minus' : 'plus'}
        as={AntDesign}
        color={Color.black}
        size={moderateScale(20,0.6)}
        onPress={()=>{
            setShowAnswer(!showAnswer)
        }}
        />
      </View>
      {
        showAnswer &&
      
      <View style={{
        marginTop : moderateScale(10,0.3),
        width : windowWidth * 0.75,
        paddingHorizontal : moderateScale(20,0.6),
      }}>
        <CustomText style={{
            width : windowWidth * 0.7 ,
            lineHeight : moderateScale(20,0.3),
            fontSize : moderateScale(14,0.6)
        }}>{answer}</CustomText>
      </View>}
    </View>
  )
}

export default FrequentlyAskedCard

const styles = ScaledSheet.create({
    container : {
        marginVertical : moderateScale(10,0.3),
        borderBottomWidth : 1,
        borderColor : Color.black,
        alignSelf : 'center',
        paddingBottom : moderateScale(30,0.6)
     },
    questionContainer : {
        width : windowWidth * 0.8,
        flexDirection : 'row',
        justifyContent : 'space-between',
        // alignItems : 'center',
        paddingHorizontal : moderateScale(10,0.6),
    },
})