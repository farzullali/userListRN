import { View, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../components/ListItem";

import { GlobalStyles } from "../constants/style";
import { USERS } from "../data/dummy-data";
import { addUser } from "../store/list";

function ListOfUsersScreen() {
  const state = useSelector((state) => state.list.users);
  
  const dispatch = useDispatch();
  
  function renderList(itemData) {
    const item = itemData.item;

    return <ListItem item={item} />;
  }

  return (
    <View style={styles.root}>
      <FlatList data={state} renderItem={renderList} />
    </View>
  );
}

export default ListOfUsersScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  text: {
    color: GlobalStyles.colors.primary50,
  },
});
