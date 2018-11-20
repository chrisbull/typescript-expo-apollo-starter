// @ts-ignore -- createAppContainer is not yet in @types/react-navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { useScreens } from 'react-native-screens'

import MainTabNavigator from './MainTabNavigator'

useScreens()

const AppNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
