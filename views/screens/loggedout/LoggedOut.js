import React, { Component } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import { styles } from './LoggedOutStyle';
import { RoundedButton }  from '../../../components/lib/button/RoundedButton';
import { colors } from "../../../themes/default";
import { TnC } from "../../views/tnc/TnC";
import  Icon  from 'react-native-vector-icons/FontAwesome';

export const LoggedOut = (props) => {
  return (
    <View style={styles.wrapper}> 
      <View style={styles.welcomeWrapper}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
        <Text style={styles.welcomeText}>
          Welcome to Vantage point, your logistics assistant
        </Text>
        
        <RoundedButton 
          text="Connect to Facebook" 
          textColor={colors.green01}
          background={colors.white}
          icon={
            <Icon name="facebook" size={20} style={styles.facebookIcon} />
          }
        />
        <RoundedButton text="Create Account" textColor={colors.white} />
        <TouchableHighlight
          style={styles.moreOptionsButton}
        >
          <Text style={styles.moreOptionsButtonText}>More options</Text>
        </TouchableHighlight>
        <TnC />
      </View>
    </View>
  );
}