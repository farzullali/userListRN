import { useEffect, useLayoutEffect, useState } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import UserForm from "../components/ManageUser/UserForm";
import { USERS } from "../data/dummy-data";
import { findUserWithId } from "../store/list";

function ManageUserScreen({ route, navigation }) {
  const state = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const editedUserId = route.params?.id;
  
  const isEditing = !!editedUserId;
  
  const editedUserIndex = state.users.findIndex((user) => {
    
    return user.id === editedUserId;
  });

  const editedUser = state.users[editedUserIndex];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit User" : "Add User",
    });
  }, []);

  return (
    <View>
      <UserForm
        submitButtonLabel={isEditing ? "Save" : "Add"}
        defaultUser={isEditing && editedUser}
      />
    </View>
  );
}

export default ManageUserScreen;
