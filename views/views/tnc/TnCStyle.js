import { StyleSheet } from "react-native";
import {colors} from "../../../themes/default";

export const styles = StyleSheet.create({
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