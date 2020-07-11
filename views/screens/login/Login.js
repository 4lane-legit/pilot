import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import InputField from "../../../components/lib/inputfield/InputField";
import {ArrowButton} from "../../../components/lib/button/ArrowButton";
import { styles } from "./LoginStyle";
import {colors} from "../../../themes/default";

export const Login = (props) =>  {
  function handleNextButtonClick() {
      alert("Wazzzappp!!!!");
  }
  return (
  <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
    <View style={styles.scrollViewWrapper}>
        <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField 
            labelText="EMAIL ADDRESS" 
            labelTextSize={14} 
            labelColor={colors.white} 
            textColor={colors.white} 
            borderBottomColor={colors.white} 
            inputType="email" 
            customStyle={{marginBottom:30}} 
                
            />
            <InputField 
            labelText="PASSWORD" 
            labelTextSize={14} 
            labelColor={colors.white} 
            textColor={colors.white} 
            borderBottomColor={colors.white} 
            inputType="password"  
            customStyle={{marginBottom:30}}

            />
        </ScrollView>
        <ArrowButton handleNextButton = {handleNextButtonClick} 
        direction = {true}
        /> 
    </View>
    </KeyboardAvoidingView>
  );
}