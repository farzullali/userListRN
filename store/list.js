import { createSlice } from "@reduxjs/toolkit";
import { useTransition } from "react";
import { ActivityIndicatorComponent } from "react-native";

const listSlice = createSlice({
  name: "list",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      let temp = action.payload;
      temp.id = Math.random();
      state.users.push(temp);
    },
    findUserWithId: (state, action) => {
      const index = action.payload.index;
      state.users[index] = { ...action.payload.newUser };
    },
    deleteUser: (state,action) =>{
      state.users = action.payload.newList;
    }

    // state-i update elemek uchun action
    // hansi data gelecek?>> temiz data ile update
    // temiz data haradan gelecek?>> ui'Dan
  },
});

export const { addUser, findUserWithId, deleteUser } = listSlice.actions;

export default listSlice.reducer;
