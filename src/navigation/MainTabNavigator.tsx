import * as React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import LinksScreen from '../screens/LinksScreen'
import SettingsScreen from '../screens/SettingsScreen'
import PostsScreen from '../screens/PostsScreen'
import MainScreen from '../screens/MainScreen'

import { AccelerometerScreen } from '../screens/AccelerometerScreen'
import { AmplitudeScreen } from '../screens/AmplitudeScreen'
import { AssetScreen } from '../screens/AssetScreen'
import { AudioScreen } from '../screens/AudioScreen'
import { BlurView1Screen } from '../screens/BlurView1Screen'
import { BlurView2Screen } from '../screens/BlurView2Screen'
import { BrightnessScreen } from '../screens/BrightnessScreen'
import { CameraScreen } from '../screens/CameraScreen'
import { ConstantsScreen } from '../screens/ConstantsScreen'
import { FacebookScreen } from '../screens/FacebookScreen'
import { FontScreen } from '../screens/FontScreen'
import { GyroscopeScreen } from '../screens/GyroscopeScreen'
import { LinearGradientScreen } from '../screens/LinearGradientScreen'
import { LocalAuthenticationScreen } from '../screens/LocalAuthenticationScreen'
import { ManifestScreen } from '../screens/ManifestScreen'
import { MapViewScreen } from '../screens/MapViewScreen'
import { PlatformScreen } from '../screens/PlatformScreen'
import { SvgScreen } from '../screens/SvgScreen'
import { SystemFontsScreen } from '../screens/SystemFontsScreen'
import { VectorIconsScreen } from '../screens/VectorIconsScreen'

interface Props {
  focused: boolean
}

const MainStack = createStackNavigator(
  {
    Main: MainScreen,

    // Other Routes
    Accelerometer: { screen: AccelerometerScreen },
    Amplitude: { screen: AmplitudeScreen },
    Asset: { screen: AssetScreen },
    Audio: { screen: AudioScreen },
    BlurView1: { screen: BlurView1Screen },
    BlurView2: { screen: BlurView2Screen },
    Brightness: { screen: BrightnessScreen },
    Camera: { screen: CameraScreen },
    Constants: { screen: ConstantsScreen },
    Facebook: { screen: FacebookScreen },
    Font: { screen: FontScreen },
    Gyroscope: { screen: GyroscopeScreen },
    LinearGradient: { screen: LinearGradientScreen },
    LocalAuthentication: { screen: LocalAuthenticationScreen },
    Manifest: { screen: ManifestScreen },
    MapView: { screen: MapViewScreen },
    Platform: { screen: PlatformScreen },
    Svg: { screen: SvgScreen },
    SystemFonts: { screen: SystemFontsScreen },
    VectorIcons: { screen: VectorIconsScreen },
  },
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
