import React from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'

import LinksScreen from '../screens/LinksScreen'
import PostsScreen from '../screens/PostsScreen'
import SettingsScreen from '../screens/SettingsScreen'
import RouteConfig from './RouteConfig'

const MainStack = createStackNavigator(RouteConfig, {
  navigationOptions: {
    tabBarLabel: 'Main',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
      />
    ),
  },
})

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  {
    navigationOptions: {
      tabBarLabel: 'Links',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
      ),
    },
  },
)

const PostsStack = createStackNavigator(
  {
    Posts: PostsScreen,
  },
  {
    navigationOptions: {
      tabBarLabel: 'Posts',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
      ),
    },
  },
)

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  {
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
      ),
    },
  },
)

export default createBottomTabNavigator({
  LinksStack,
  MainStack,
  PostsStack,
  SettingsStack,
})
