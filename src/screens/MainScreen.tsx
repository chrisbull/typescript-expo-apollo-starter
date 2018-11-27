import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { ListItem } from 'react-native-elements'

class DestinationAndTitle {
  destination: string
  title: string

  constructor(destination: string, title?: string) {
    this.destination = destination

    if (title === undefined) {
      this.title = destination
    } else {
      this.title = title
    }
  }
}

export default class MainScreen extends Component<NavigationScreenProps> {
  static navigationOptions = {
    title: 'Home',
  }

  state = { selected: [] }

  private destinationAndTitlePairs: DestinationAndTitle[] = [
    new DestinationAndTitle('Accelerometer'),
    new DestinationAndTitle('Amplitude'),
    new DestinationAndTitle('Asset'),
    new DestinationAndTitle('Audio'),
    new DestinationAndTitle('BlurView1'),
    new DestinationAndTitle('BlurView2'),
    new DestinationAndTitle('Brightness'),
    new DestinationAndTitle('Camera'),
    new DestinationAndTitle('Constants'),
    new DestinationAndTitle('Facebook'),
    new DestinationAndTitle('FirebaseAuthTest'),
    new DestinationAndTitle('Font'),
    new DestinationAndTitle('Github'),
    new DestinationAndTitle('Google'),
    new DestinationAndTitle('Gyroscope'),
    new DestinationAndTitle('Home'),
    new DestinationAndTitle('LinearGradient'),
    new DestinationAndTitle('Links'),
    new DestinationAndTitle('LocalAuthentication'),
    new DestinationAndTitle('Main'),
    new DestinationAndTitle('Manifest'),
    new DestinationAndTitle('MapView'),
    new DestinationAndTitle('Platform'),
    new DestinationAndTitle('Posts'),
    new DestinationAndTitle('Settings'),
    new DestinationAndTitle('Svg'),
    new DestinationAndTitle('SystemFonts'),
    new DestinationAndTitle('VectorIcons'),
  ]

  _keyExtractor = item => `key-${item.title}`

  _onPressItem = (destination: string) => {
    this.props.navigation.navigate(destination)
  }

  renderRow = ({ item }) => <ListItem onPress={() => this._onPressItem(item.destination)} title={item.title} />

  render() {
    return (
      <FlatList data={this.destinationAndTitlePairs} renderItem={this.renderRow} keyExtractor={this._keyExtractor} />
    )
  }
}
