import * as React from 'react'
import { Text } from 'react-native'
import { Component } from 'react'
import { Constants } from 'expo'
import { ScrollView } from 'react-native'

export default class SystemFontsScreen extends Component {
  static navigationOptions = {
    title: 'systemFonts',
  }

  render() {
    return (
      <ScrollView>
        {Constants.systemFonts.map((systemFont, index) => (
          <Text key={index}>{systemFont}</Text>
        ))}
      </ScrollView>
    )
  }
}
