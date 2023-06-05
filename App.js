import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store/store";

import ListOfUsersScreen from "./screens/ListOfUsersScreen";
import { GlobalStyles } from "./constants/style";
import UserPageScreen from "./screens/UserPageScreen";
import IconButton from "./components/ui/IconButton";
import ManageUserScreen from "./screens/ManageUserScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({ navigation }) => ({
              headerStyle: { backgroundColor: GlobalStyles.colors.primary400 },
              headerTintColor: GlobalStyles.colors.primary50,
              contentStyle: { backgroundColor: GlobalStyles.colors.primary400 },
              headerRight: ({ tintColor }) => {
                return (
                  <IconButton
                    name={"add"}
                    size={28}
                    color={tintColor}
                    onPress={() => {
                      navigation.navigate("ManageUser");
                    }}
                  />
                );
              },
            })}
          >
            <Stack.Screen
              name="ListOfUsers"
              component={ListOfUsersScreen}
              options={{
                title: "All Users",
                
              }}
            />

            <Stack.Screen
              name="UserPage"
              component={UserPageScreen}
              options={{
                title: "User Details",
              }}
            />

            <Stack.Screen name="ManageUser" component={ManageUserScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
