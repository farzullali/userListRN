import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Label from "../components/ui/Label";

import { USERS } from "../data/dummy-data";

function UserPageScreen({ route }) {
  const state = useSelector((state)=> state.list);
  const dispatch = useDispatch();

  const { id } = route.params;

  const whichUsersShow = state.users.find((user) => user.id === id);







  
  const avatarUser =
    whichUsersShow.gender === "0"
      ? require("../images/man.png")
      : require("../images/woman.png");

  return (
    <>
      <View style={styles.root}>
        <View style={styles.imageContainer}>
          <Image source={avatarUser} style={styles.image} />
        </View>
        <ScrollView style={styles.infoContainer}>
          <Label label={"Name"} value={whichUsersShow.name.value} />
          <Label label={'Surname'} value={whichUsersShow.surname.value}/>
          <Label label={'Birth Date'} value={whichUsersShow.birthDate.value}/>
          <Label label={'Profession'} value={whichUsersShow.profession.value}/>
          <Label label={'Gender'} value={(whichUsersShow.gender.value === '0') ? 'Male' : 'Female'} />
          <Label label={'Biography'} value={whichUsersShow.biography.value}/>
        </ScrollView>
      </View>
    </>
  );
}

export default UserPageScreen;

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
  },
  image: {
    width: 150,
    height: 150,
  },
  infoContainer: {
    
  },
});
