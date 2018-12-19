import * as React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font } from 'expo'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'

import { mockedLink } from './mock'
import AppNavigator from './navigation/AppNavigator'

import Config from '../config'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: Config.USE_MOCKED ? mockedLink : new HttpLink(),
})

interface Props {
  skipLoadingScreen?: boolean
}

interface State {
  isLoadingComplete: boolean
}

export default class App extends React.Component<Props, State> {
  state = {
    isLoadingComplete: false,
  }

  render() {
    const { isLoadingComplete } = this.state
    const { skipLoadingScreen } = this.props
    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.startAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      )
    }

    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </ApolloProvider>
    )
  }

  startAsync = async () => {
    await this.loadResourcesAsync()
    return
  }

  loadResourcesAsync = async () => {
    await Asset.loadAsync([
      // ...
      require('../assets/images/robot-dev.png'),
      require('../assets/images/robot-prod.png'),
    ])

    await Font.loadAsync({
      ...Ionicons.loadFont,
      ...MaterialIcons.loadFont,
      'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    })

    return
  }

  handleLoadingError = (error: Error) => {
    // ... just in case
    console.warn(error)
  }

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
