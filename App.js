import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActivityProvider } from './src/utils/ActivityContext';
import AppNav from './src/utils/AppNav';
import { AuthProvider } from './src/utils/AuthContext';
import * as Notifications from 'expo-notifications';



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

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
