import * as React from 'react'
import { Component } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'

export default class VectorIconsScreen extends Component {
  static navigationOptions = {
    title: 'Vector Icons',
  }

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#fff',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Ionicons
          color="green"
          name="md-checkmark-circle"
          size={100}
          style={{
            textDecorationColor: 'black',
            textDecorationLine: 'underline',
            textDecorationStyle: 'double',
          }}
        />
      </View>
    )
  }
}
