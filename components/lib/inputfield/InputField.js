import React, { Component, useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./InputFieldStyle";

const InputField = (props) => {
    const [secureInput, toggleInputSecurity] = useState(false);
    const {
        labelText,
        labelTextSize,
        labelColor,
        textColor,
        borderBottomColor,
        inputType,
        customStyle
    } = props;
    const color = labelColor || colors.white;
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || "transparent";

    return (
        <View style={[customStyle, styles.wrapper]}>
        <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
        <TextInput
            autoCorrect={false}
            style={[
            { color: inputColor, borderBottomColor: borderBottom },
            styles.inputFiled
            ]}
            secureTextEntry={inputType === "password"}
        />
        </View>
    );
}

export default InputField;