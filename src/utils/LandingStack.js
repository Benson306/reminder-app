import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../components/LandingPage";
import HomeStack from "./HomeStack";

const LandingStack = () => {
    const Stack = createNativeStackNavigator();

    return ( 
        <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen 
                name="Landing" 
                component={LandingPage}
                options = {{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    headerBackVisible:false,
                    headerShown:false
                }}
            />
        </Stack.Navigator>
     );
}
 
export default LandingStack;