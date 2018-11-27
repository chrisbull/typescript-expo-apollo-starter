import * as React from 'react'
import { Component } from 'react'
// @ts-ignore // The type definitions for MapView have not been created.
import { MapView } from 'expo'

export default class MapViewScreen extends Component {
  static navigationOptions = {
    title: 'MapView',
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 55.6838499,
          latitudeDelta: 0.1,
          longitude: 12.5630238,
          longitudeDelta: 0.1,
        }}
      />
    )
  }
}
