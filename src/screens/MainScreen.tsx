import * as React from 'react'
import { Button } from 'react-native'
import { Component } from 'react'
import { NavigationScreenProps } from 'react-navigation'
import { ScrollView } from 'react-native'

class DestinationAndTitle {
  public destination: string
  public title: string

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
  public static navigationOptions = {
    title: 'Home',
  }

  private destinationAndTitlePairs: DestinationAndTitle[] = [
    new DestinationAndTitle('Accelerometer'),
    new DestinationAndTitle('Amplitude'),
    new DestinationAndTitle('Asset'),
    new DestinationAndTitle('Audio'),
    new DestinationAndTitle('BlurView1', 'BlurView 1'),
    new DestinationAndTitle('BlurView2', 'BlurView 2'),
    new DestinationAndTitle('Brightness'),
    new DestinationAndTitle('Camera'),
    new DestinationAndTitle('Constants'),
    new DestinationAndTitle('Facebook'),
    new DestinationAndTitle('Font'),
    new DestinationAndTitle('Gyroscope'),
    new DestinationAndTitle('LinearGradient'),
    new DestinationAndTitle('LocalAuthentication', 'Local Authentication'),
    new DestinationAndTitle('MapView'),
    new DestinationAndTitle('Svg'),
    new DestinationAndTitle('VectorIcons', 'Vector Icons'),
  ]

  public render() {
    return (
      <ScrollView
        style={{
          backgroundColor: '#fff',
          flex: 1,
        }}
      >
        {this.destinationAndTitlePairs.map(destinationAndTitle => (
          <Button
            key={destinationAndTitle.destination}
            onPress={() => this.props.navigation.navigate(destinationAndTitle.destination)}
            title={destinationAndTitle.title}
          />
        ))}
      </ScrollView>
    )
  }
}
