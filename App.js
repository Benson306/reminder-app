import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LandingPage from './src/components/LandingPage';
import { ActivityProvider } from './src/utils/ActivityContext';
import HomeStack from './src/utils/HomeStack';

export default function App() {
  return (
    
      <SafeAreaProvider>
        <NavigationContainer>
          <ActivityProvider>
            <HomeStack />
          </ActivityProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    
    
  );
}
