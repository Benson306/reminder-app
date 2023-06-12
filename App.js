import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityProvider } from './src/utils/ActivityContext';
import AppNav from './src/utils/AppNav';
import { AuthProvider } from './src/utils/AuthContext';
import HomeStack from './src/utils/HomeStack';
import LandingStack from './src/utils/LandingStack';

export default function App() {


  return (
    
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthProvider>
            <ActivityProvider>
             <AppNav />
            </ActivityProvider>
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    
    
  );
}
