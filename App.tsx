import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreen } from 'react-native-screens';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import BottomTab from './src/navigation/BottomTab';

export default function App() {
    return (
        <NavigationContainer>
            <BottomTab />
            <StatusBar style="light" />
        </NavigationContainer>
    );
}

