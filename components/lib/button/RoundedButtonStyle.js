import { StyleSheet } from "react-native";
import {colors} from "../../../themes/default";
export const styles = StyleSheet.create({
    wrapper: {
      padding: 15,
      display: "flex",
      borderRadius: 40,
      borderWidth: 1,
      borderColor: colors.white,
      marginBottom: 15,
      alignItems: "center"
    },
    buttonText: {
      fontSize: 16,
      width: "100%",
      textAlign: "center"
    },
    ButtonTextWrapper: {
      flexDirection: "row",
      justifyContent: "flex-end"
    }
  });