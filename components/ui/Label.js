import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";

function Label({label, value}) {
  return <View style={styles.root}>
    <Text style={styles.labelText}>{label}</Text>
    <Text style={styles.valueText}>{value}</Text>
  </View>;
}

export default Label;

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.accent500,
        borderColor: GlobalStyles.colors.accent500,
        borderRadius: 30,
        borderWidth:1,
        padding: 6,
        margin: 4
    },
    labelText: {
        fontSize: 14,
        color: GlobalStyles.colors.primary300
    },
    valueText: {
        fontSize: 20,
        color: GlobalStyles.colors.primary400
    }
})
