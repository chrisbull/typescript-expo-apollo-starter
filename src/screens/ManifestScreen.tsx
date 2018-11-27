import * as React from 'react'
import { Text } from 'react-native'
import { Component } from 'react'
import { Constants } from 'expo'
import { ScrollView } from 'react-native'

export default class ManifestScreen extends Component {
  static navigationOptions = {
    title: 'manifest',
  }

  render() {
    return (
      <ScrollView>
        <Text>{JSON.stringify(Constants.manifest, undefined, 2)}</Text>
      </ScrollView>
    )
  }
}
