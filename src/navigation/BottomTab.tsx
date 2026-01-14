import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Feather from '@expo/vector-icons/Feather';
import { s } from "react-native-size-matters";
import Ionicons from '@expo/vector-icons/Ionicons';
import CategoryScreen from "../screens/CategoryScreen";
import SavedScreen from "../screens/SavedScreen";
import colors from "../themes/colors";

const Tab = createBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.primary,
            },
            tabBarActiveTintColor: colors.activeIcon,
            tabBarInactiveTintColor: colors.inactiveIcon,
            tabBarItemStyle: {
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: s(5),
            },
            tabBarIcon: ({ color, focused, size }) => null,
        }}>
            <Tab.Screen options={{
                tabBarIcon: ({ color }) => {
                    return <Feather name="home" size={s(20)} color={color} />;
                }
            }} name="Home" component={HomeScreen} />
            <Tab.Screen options={{
                tabBarIcon: ({ color }) => {
                    return (
                        <Ionicons name="albums-outline" size={s(20)} color={color} />
                    )
                }
            }} name="Category" component={CategoryScreen} />
            <Tab.Screen options={{
                tabBarIcon: ({ color }) => {
                    return (
                        <Feather name="bookmark" size={s(20)} color={color} />
                    )
                }
            }} name="Saved" component={SavedScreen} />
        </Tab.Navigator >
    )
}

export default BottomTab;
