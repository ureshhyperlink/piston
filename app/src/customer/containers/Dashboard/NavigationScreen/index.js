import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import COLOR from '../../../../../config/styles'
import IMAGES from '../../../../../config/images'
import Home from '../Home';
import Chat from '../Chat';
import Watchlist from '../Watchlist';
import Emergency from '../Emergency';
import IconSelection from '../../../../../components/CommonForm/IconSelection'

const HomeStack = createStackNavigator({
    Home: { screen: Home },
});
const ChatStack = createStackNavigator({
    Chat: { screen: Chat },
});
const WatchlistStack = createStackNavigator({
    Watchlist: { screen: Watchlist },
});
const EmergencyStack = createStackNavigator({
    Emergency: { screen: Emergency },
});

const App = createBottomTabNavigator({
    Home: { screen: HomeStack },
    Watchlist: { screen: WatchlistStack },
    Chat: { screen: ChatStack },
    Emergency: { screen: EmergencyStack },
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    return (<IconSelection source={focused ? IMAGES.icons.home_active : IMAGES.icons.home_inactive} />);
                } else if (routeName === 'Watchlist') {
                    return (<IconSelection source={focused ? IMAGES.icons.list_active : IMAGES.icons.list_inactive} />);
                } else if (routeName === 'Chat') {
                    return (<IconSelection source={focused ? IMAGES.icons.chat_active : IMAGES.icons.chat_inactive} />);
                } else if (routeName === 'Emergency') {
                    return (<IconSelection source={focused ? IMAGES.icons.emergency_active : IMAGES.icons.emergency_inactive} />);
                }
            },
        }),
        tabBarOptions: {
            activeTintColor: COLOR.color.COLOR_PRIMARY,
            inactiveTintColor: COLOR.color.COLOR_GREY_TRANSP,
            showLabel: true,
            tabStyle: {
                paddingTop: 8,
                paddingBottom: 2
            },
            style: {
                backgroundColor: COLOR.color.COLOR_WHITE,
            },
        },
    }
);
export default createAppContainer(App);