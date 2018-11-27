import * as React from 'react'
import { Component } from 'react'
import { Asset } from 'expo'
import { View } from 'react-native'
import { Image } from 'react-native'
import { Text } from 'react-native'

interface State {
  assetsLoaded: boolean
}

export default class AssetScreen extends Component<{}, State> {
  static navigationOptions = {
    title: 'Asset',
  }
  constructor(props: {}, context?: any) {
    super(props, context)

    this.state = {
      assetsLoaded: false,
    }

    this.loadAssets()
  }

  render() {
    if (!this.state.assetsLoaded) {
      return <Text>Loading assets...</Text>
    }

    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#fff',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Image
          resizeMode="contain"
          source={require('../../assets/images/icon.png')}
          style={{
            alignSelf: 'stretch',
            flex: 1,
            height: undefined,
            width: undefined,
          }}
        />
      </View>
    )
  }

  private async loadAssets() {
    // This is only required when the app has been published. I haven't tested this code yet, so not really sure if this statement is correct.
    await Asset.loadAsync(require('../../assets/images/icon.png'))
    this.setState({
      assetsLoaded: true,
    })
  }
}
