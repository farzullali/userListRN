import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/style";

function Input({ label, invalid, textInputConfig, style }) {


  return (
    <>
      <View style={[styles.inputContainer, style]}>
        <Text style={[styles.label, !invalid && styles.invalidLabel]}>{label}</Text>
        <TextInput style={styles.input} {...textInputConfig} />
      </View>
    </>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    margin: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary300,
    backgroundColor: GlobalStyles.colors.primary400,
  },
  label:{
    color: GlobalStyles.colors.accent500
  },  
  input: {
    color: GlobalStyles.colors.primary50,
  },
  invalidLabel: {
    color: "red",
  },
  invalidInput:{
    
  }
});
