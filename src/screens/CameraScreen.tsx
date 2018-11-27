import * as React from 'react'
import { Camera } from 'expo'
import { Component } from 'react'
import { Permissions } from 'expo'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

interface Props extends NavigationScreenProps {}

interface State {
  cameraType: string // TODO Camera.Constants.Type,
  hasPermissionToCamera: boolean | undefined
}

export default class CameraScreen extends Component<Props, State> {
  constructor(props, context) {
    super(props, context)

    this.state = {
      cameraType: 'back', // Camera.Constants.Type.back, TODO
      hasPermissionToCamera: undefined,
    }
  }

  componentWillMount() {
    this.props.navigation.addListener('didFocus', () => {
      this.askForPermission()
    })
  }

  askForPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)

    this.setState({
      hasPermissionToCamera: status === 'granted',
    })
  }

  render() {
    if (this.state.hasPermissionToCamera === undefined) {
      return <Text>Getting permission to access the camera.</Text>
    }

    if (this.state.hasPermissionToCamera === false) {
      return <Text>No access to the camera.</Text>
    }

    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={this.state.cameraType}>
          <View
            style={{
              backgroundColor: 'transparent',
              flex: 1,
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              onPress={() => this.toggleCameraType()}
              style={{
                alignItems: 'center',
                alignSelf: 'flex-end',
                flex: 0.1,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  marginBottom: 10,
                }}
              >
                {' '}
                Flip{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    )
  }

  private toggleCameraType() {
    this.setState({
      // TODO
      // cameraType: this.state.cameraType === Camera.Constants.Type.back
      //   ? Camera.Constants.Type.front
      //   : Camera.Constants.Type.back
      cameraType: this.state.cameraType === 'back' ? 'front' : 'back',
    })
  }
}
