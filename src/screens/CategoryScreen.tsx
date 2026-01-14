import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const CategoryScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text>Category</Text>
            </View>
        </SafeAreaView>
    )
}

export default CategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2D6A4F'
    },
})
