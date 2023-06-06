import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddActivity from '../components/AddActivity';
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

            <Stack.Screen
                name="Add"
                component={AddActivity}
                options={{
                    headerTitle:'Add Activity',
                    headerTitleAlign:'center',
                    headerStyle:{
                        backgroundColor: '#000'
                    },
                    headerTitleStyle:{
                        color:'#fff'
                    },
                    headerTintColor:'#ff944d'
                }}
            />

        </Stack.Navigator>
     );
}
 
export default HomeStack;