import React, { Component } from "react";
import propTypes from "prop-types";
import { Text, View, TouchableHighlight } from "react-native";
import { styles } from "./RoundedButtonStyle";

export const RoundedButton = (props) => {
    const { text, textColor, background, icon } = props;
    const backgroundColor = background || 'transparent';
    const color = textColor || color.black;

    return (
      <TouchableHighlight style={[{ backgroundColor }, styles.wrapper]}>
        <View style={styles.ButtonTextWrapper} >
          {icon}
          <Text style={[{ color }, styles.buttonText]}>
            {text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

RoundedButton.propTypes = {
    text: propTypes.string.isRequired,
    textColor: propTypes.string,
    backgroundColor: propTypes.string,
    icon: propTypes.object
};