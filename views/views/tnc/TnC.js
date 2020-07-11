import React, { Component } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import { styles } from '../../views/tnc/TnCStyle';
export const TnC = () => {
    return (
        <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
            By tapping Continue, Create Account or More
            </Text>
            <Text style={styles.termsText}>{" options,"}</Text>
            <Text style={styles.termsText}>{"I agree to Vantage Points' "}</Text>
            <TouchableHighlight style={styles.linkButton}>
                <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>,</Text>
            <TouchableHighlight style={styles.linkButton}>
                <Text style={styles.termsText}> Payments Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>,</Text>
            <TouchableHighlight style={styles.linkButton}>
            <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, and</Text>
            <TouchableHighlight style={styles.linkButton}>
                <Text style={styles.termsText}>Nondiscrimination Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>.</Text>
        </View>
    );
}