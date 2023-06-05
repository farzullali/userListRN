import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../constants/style";
import IconButton from "./ui/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/list";

function ListItem({ item }) {
  const state = useSelector((state) => state.list.users);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const id = item.id;

  function itemEditHandler() {
    navigation.navigate("UserPage", { id });
  }

  function editUserHandler() {
    navigation.navigate("ManageUser", { id });
  }

  function deleteUserHandler() {
    const index = state.findIndex((user) => user.id === id);

    const newList = state.filter((user) => user.id !== id);
    dispatch(deleteUser({newList: newList}));
  }

  return (
    <Pressable
      onPress={itemEditHandler}
      style={({ pressed }) => pressed && { opacity: 0.75 }}
    >
      <View style={styles.root}>
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textItem}>{item.name.value}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textItem}>{item.surname.value}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.textItem, { fontSize: 13 }]}>
              {item.birthDate.value}
            </Text>
          </View>
          <View style={styles.genderItem}>
            <Text style={styles.textItem}>
              {item.gender.value === "0" ? "M" : "W"}
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <IconButton
            name="pencil"
            size={18}
            color={GlobalStyles.colors.primary50}
            style={styles.buttons}
            onPress={editUserHandler}
          />
          <IconButton
            name="trash"
            size={18}
            color={GlobalStyles.colors.primary200}
            style={styles.buttons}
            onPress={deleteUserHandler}
          />
        </View>
      </View>
    </Pressable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  root: {
    marginVertical: 8,
    marginHorizontal: 12,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: GlobalStyles.colors.accent500,
  },
  infoContainer: {
    paddingLeft: 5,
    flex: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 2,
  },
  textItem: {
    color: GlobalStyles.colors.primary50,
    fontSize: 16,
  },
  genderItem: {
    flex: 1,
    marginLeft: 15,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttons: {
    marginHorizontal: 5,
  },
});
