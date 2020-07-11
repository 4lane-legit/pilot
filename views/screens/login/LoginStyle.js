import { StyleSheet } from "react-native";
import {colors} from "../../../themes/default";

export const styles = StyleSheet.create({
    wrapper: {
      display: "flex",
      flex: 1,
      backgroundColor: colors.green01
    },
    scrollViewWrapper: {
      marginTop: 70,
      flex: 1
    },
    scrollView: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flex:1
    },
    avoidView: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 20,
      flex:1
     },
    loginHeader: {
      fontSize: 28,
      color: colors.white,
      fontWeight: "300",
      marginBottom: 40
    }
});