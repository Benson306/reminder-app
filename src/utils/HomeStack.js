import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import LandingPage from '../components/LandingPage';

const Stack = createNativeStackNavigator();

const HomeStack = () => {

    return ( 
        <Stack.Navigator>
            <Stack.Screen 
                name="Landing" 
                component={LandingPage}
                options = {{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerBackVisible:false,
                    headerShown:false
                }}
            />

        </Stack.Navigator>
     );
}
 
export default HomeStack;