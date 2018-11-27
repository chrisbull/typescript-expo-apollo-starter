import * as React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'

import LinksScreen from '../screens/LinksScreen'
import RouteConfig from './RouteConfig'
import PostsScreen from '../screens/PostsScreen'
import SettingsScreen from '../screens/SettingsScreen'

interface Props {
  focused: boolean
}

const MainStack = createStackNavigator(
  RouteConfig,
  // {
  //   Main: MainScreen,

  //   // Other Routes
  //   Accelerometer: AccelerometerScreen,
  //   Amplitude: AmplitudeScreen,
  //   Asset: AssetScreen,
  //   Audio: AudioScreen,
  //   BlurView1: BlurView1Screen,
  //   BlurView2: BlurView2Screen,
  //   Brightness: BrightnessScreen,
  //   Camera: CameraScreen,
  //   Constants: ConstantsScreen,
  //   Facebook: FacebookScreen,
  //   FirebaseAuthTest: FirebaseAuthTestScreen,
  //   Font: FontScreen,
  //   Github: GithubScreen,
  //   Google: GoogleScreen,
  //   Gyroscope: GyroscopeScreen,
  //   Home: HomeScreen,
  //   LinearGradient: LinearGradientScreen,
  //   Links: LinksScreen,
  //   LocalAuthentication: LocalAuthenticationScreen,
  //   Manifest: ManifestScreen,
  //   MapView: MapViewScreen,
  //   Platform: PlatformScreen,
  //   Posts: PostsScreen,
  //   Settings: SettingsScreen,
  //   Svg: SvgScreen,
  //   SystemFonts: SystemFontsScreen,
  //   VectorIcons: VectorIconsScreen,
  // },
  {
    navigationOptions: {
      tabBarLabel: 'Main',
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
  MainStack,
  LinksStack,
  PostsStack,
  SettingsStack,
})
