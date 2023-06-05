import { useState } from "react";
import { View, StyleSheet, Button, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getFormattedDate } from "../../util/date";
import { addUser, findUserWithId } from "../../store/list";
import { useNavigation } from "@react-navigation/native";

import Input from "./Input";

function UserForm({ submitButtonLabel, defaultUser }) {
  const navigation = useNavigation();
  const state = useSelector((state) => state.list.users);

  const [inputs, setInputs] = useState({
    name: {
      value: defaultUser ? defaultUser.name.value : "",
      isValid: true,
    },
    surname: {
      value: defaultUser ? defaultUser.surname.value : "",
      isValid: true,
    },
    birthDate: {
      value: defaultUser ? getFormattedDate(defaultUser.date) : "",
      isValid: true,
    },
    gender: {
      value: defaultUser ? defaultUser.gender.value : "",
      isValid: true,
    },
    profession: {
      value: defaultUser ? defaultUser.profession.value : "",
      isValid: true,
    },
    biography: {
      value: defaultUser ? defaultUser.biography.value : "",
      isValid: true,
    },
  });

  const dispatch = useDispatch();

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((currInputs) => {
      return {
        ...currInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const nameIsValid =
      inputs.name.value.trim().length < 2 || inputs.name.value.trim().length < 16;
    const surnameIsValid =
      inputs.surname.value.trim().length < 2 || inputs.surname.value.trim().length > 20;
    const biographyIsValid = inputs.biography.value.trim().length < 15;
    const professionIsValid = inputs.profession.value.trim().length < 7;
    const birthDateIsValid = inputs.birthDate.value.toString() !== "Invalid Date";

    if (
      !nameIsValid ||
      !surnameIsValid ||
      !biographyIsValid ||
      !professionIsValid ||
      !birthDateIsValid
    ) {
      
      inputs.surname.isValid = surnameIsValid;
      inputs.biography.isValid = biographyIsValid;
      inputs.profession.isValid = professionIsValid;
      inputs.birthDate.isValid = birthDateIsValid;
      return;
    }

    if (defaultUser) {

      const newUser = {
        id: defaultUser.id,
        name: inputs.name,
        surname: inputs.surname,
        biography: inputs.biography,
        profession: inputs.profession,
        gender: inputs.gender,
        birthDate: inputs.birthDate,
      };


      const index = state.findIndex((user) => user.id === defaultUser.id);
      dispatch(findUserWithId({ index: index, newUser: newUser }));
    } else {
      const tempData = { ...inputs };

      // obyekti atmaq reducer'a
      dispatch(addUser(tempData));
    }
    navigation.goBack();
  }

  function resetHandler() {
    setInputs({
      name: {
        value: "",
        isValid: true,
      },
      surname: {
        value: "",
        isValid: true,
      },
      biography: {
        value: "",
        isValid: true,
      },
      birthDate: {
        value: "",
        isValid: true,
      },
      gender: {
        value: "",
        isValid: true,
      },
      profession: {
        value: "",
        isValid: true,
      },
    });
  }

  return (
    <ScrollView>
      <Input
        label={"Name"}
        textInputConfig={{
          placeholder: "Name",
          onChangeText: inputChangeHandler.bind(this, "name"),
          value: inputs.name.value,
        }}
        invalid={!inputs.name.isValid}
      />

      <Input
        label={"Surname"}
        textInputConfig={{
          placeholder: "Surname",
          onChangeText: inputChangeHandler.bind(this, "surname"),
          value: inputs.surname.value,
        }}
        invalid={!inputs.surname.isValid}
      />

      <Input
        label={"Birthday"}
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: inputChangeHandler.bind(this, "birthDate"),
          value: inputs.birthDate.value,
        }}
        invalid={!inputs.birthDate.isValid}
      />

      {/* <Input
        label={"Gender"}
        textInputConfig={{
          placeholder: "Gender",
          onChangeText: inputChangeHandler.bind(this, "gender"),
          value: inputs.gender.value,
        }}
      /> */}

      <Input
        label={"Profession"}
        textInputConfig={{
          placeholder: "Profession",
          onChangeText: inputChangeHandler.bind(this, "profession"),
          value: inputs.profession.value,
        }}
        invalid={!inputs.profession.isValid}
      />
      <Input
        label={"Biography"}
        textInputConfig={{
          placeholder: "Biography",
          multiline: true,
          textAlignVertical: "top",
          onChangeText: inputChangeHandler.bind(this, "biography"),
          value: inputs.biography.value,
          numberOfLines: 4,
        }}
        invalid={!inputs.biography.isValid}
      />

      <View>
        <Button title={submitButtonLabel} onPress={submitHandler} />
        <Button title="Reset" onPress={resetHandler} />
      </View>
    </ScrollView>
  );
}

export default UserForm;
