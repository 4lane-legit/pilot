import { StyleSheet } from "react-native";
import {colors} from "../../../themes/default";

export const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      display: "flex",
      backgroundColor: colors.green01 
    },
    welcomeWrapper: {
      flex: 1,
      display: "flex",
      marginTop: 30,
      padding: 20
    },
    logo: {
      width: 50,
      height: 50,
      marginTop: 50,
      marginBottom: 40,
      marginLeft: 10
    },
    welcomeText: {
      fontSize: 30,
      color: colors.white,
      fontWeight: "300",
      marginBottom: 40
    },
    facebookIcon: {
      color: colors.green01,
      position: "relative",
      left: 20,
      zIndex: 8
    },
    moreOptionsButton: {
      marginTop: 10,
    },
    moreOptionsButtonText: {
      color: colors.white,
      fontSize: 16,
    },
    termsAndConditions: {
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      flexDirection: 'row',
      marginTop: 30,
    },
    termsText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: '600',
    },
    linkButton: {
      borderBottomWidth: 1,
      borderBottomColor: colors.white,
    }
  });