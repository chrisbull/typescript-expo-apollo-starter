import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'
import SettingsScreen from '../screens/SettingsScreen'
import PostsScreen from '../screens/PostsScreen'

interface Props {
  focused: boolean
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }: Props) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
        />
      ),
    },
  },
)

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  {
    navigationOptions: {
      tabBarLabel: 'Links',
      tabBarIcon: ({ focused }: Props) => (
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
  HomeStack,
  LinksStack,
  PostsStack,
  SettingsStack,
})
