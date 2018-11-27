import * as React from 'react'
import { Text } from 'react-native'
import { Component } from 'react'
import { Constants } from 'expo'

export default class PlatformScreen extends Component {
  static navigationOptions = {
    title: 'platform',
  }

  render() {
    return <Text>{JSON.stringify(Constants.platform, undefined, 2)}</Text>
  }
}
