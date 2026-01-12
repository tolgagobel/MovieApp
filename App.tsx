import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreen } from 'react-native-screens';
import MainStackNavigator from './src/navigation/MainStackNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <MainStackNavigator />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8e1010b1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
