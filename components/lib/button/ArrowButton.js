import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableHighlight, Text, View } from "react-native";
import {colors} from "../../../themes/default";
import { styles } from "./ArrowButtonStyle";

export const ArrowButton = (props) => {
    const { disabled, handleNextButton, direction} = props;
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight style={[{ opacity: 0.6 }, styles.button]}
        onPress={handleNextButton}
        >
          <Icon
            name="angle-right"
            color={colors.green01}
            size={32}
            style={styles.icon}
          />
        </TouchableHighlight>
      </View>
    );
  }
  

  ArrowButton.propTypes = {
    disabled: PropTypes.bool,
    direction: PropTypes.bool,
    handleNextButton: PropTypes.func
  };
  