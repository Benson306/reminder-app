
import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { AuthContext } from './AuthContext';
import HomeStack from './HomeStack';
import LandingStack from './LandingStack';

export default function AppNav() {
    const { name } = useContext(AuthContext);
    
  return name !== null ? <HomeStack /> : <LandingStack />
    
}