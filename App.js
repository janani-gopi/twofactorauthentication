import Phone from "./screen/Phone";
import Home from "./screen/Home";
import Otp from "./screen/Otp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Otp"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Phone" component={Phone} />
        <Stack.Screen name="Otp" component={Otp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
