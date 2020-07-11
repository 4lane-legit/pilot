import React from 'react';
import PropTypes from 'prop-types';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {ExploreContainer} from '../containers/explore/ExploreContainer';
import {colors} from "../../themes/default";

const Stack = createStackNavigator();

export const ExploreTab = () => {
    return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={ExploreContainer} />
      <Stack.Screen name="Create" component={ExploreContainer} />
    </Stack.Navigator>
    );
}

ExploreTab.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

const CustomTabBarIcon = (name, size) => {
    const icon = ({ tintColor }) => (
        <Icon
        name={name}
        size={size}
        color={tintColor}
        />
    );
    icon.propTypes = {
        tintColor: PropTypes.string.isRequired,
    };
    return icon;
};

export const  HomeScreenNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="Explore" 
                    component={ExploreTab}
                    options={{
                        tabBarLabel: 'EXPLORE',
                        tabBarIcon: CustomTabBarIcon('ios-search', 22)
                    }}
                />
                <Tab.Screen 
                    name="Inbox" 
                    component={ExploreTab} 
                    options={{
                        tabBarLabel: 'INBOX',
                        tabBarIcon: CustomTabBarIcon('ios-notifications-outline', 25),
                    }}
                />
                <Tab.Screen 
                    name="Profile" 
                    component={ExploreTab} 
                    options={{
                        tabBarLabel: 'PROFILE',
                        tabBarIcon: CustomTabBarIcon('ios-desktop', 25),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
