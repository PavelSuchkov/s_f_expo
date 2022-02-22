import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {MainScreen} from '../screens/MainScreen'
import {PostScreen} from '../screens/PostScreen'
import {THEME} from '../theme'
import {Platform} from 'react-native'
import {BookedScreen} from '../screens/BookedScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';


const PostNavigator = createStackNavigator({
    Main: MainScreen,
    Post: {
        screen: PostScreen,
    },
}, {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
    },
})

const BookedNavigator = createStackNavigator({
    Booked: BookedScreen,
    Post: PostScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
    },
})

const bottomTabsConfig = {
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarLabel: 'All',
            tabBarIcon: (info) =>
                <Ionicons name="ios-albums" size={25} color={info.tintColor}/>
        }
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarLabel: 'Booked',
            tabBarIcon: (info) =>
                <Ionicons name="ios-star" size={25} color={info.tintColor}/>
        }
    }
}

const BottomNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(bottomTabsConfig, {
        activeTintColor: '#fff',
        shifting: true,
        barStyle: {
            backgroundColor: THEME.MAIN_COLOR
        }
    })
    : createBottomTabNavigator(bottomTabsConfig , {
    tabBarOptions: {
        activeTintColor: THEME.MAIN_COLOR
    }
})

export const AppNavigation = createAppContainer(BottomNavigator)
