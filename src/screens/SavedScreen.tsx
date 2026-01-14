import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const SavedScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text>Saved</Text>
            </View>
        </SafeAreaView>
    )
}

export default SavedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007AFF'
    },
})
