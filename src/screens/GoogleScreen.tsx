import * as React from 'react'
import { Text, TouchableOpacity, View, Button, StyleSheet, ScrollView, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import GoogleAuth, { GoogleUserInfo } from '../services/auth/GoogleAuth'

interface Props {}

interface State {
  userInfo?: GoogleUserInfo
  error?: string
  isSignedIn: boolean
}

export default class GoogleScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Google',
  }

  state = {
    isSignedIn: false,
    userInfo: undefined,
    error: undefined,
  }

  componentDidMount() {
    this.attemptToRestoreAuthSync()
  }

  signInWithGoogleAsync = async () => {
    const { token, userInfo, error } = await GoogleAuth.signInAsync()
    const isSignedIn = !!token
    this.setState({ isSignedIn, userInfo, error })
  }

  attemptToRestoreAuthSync = async () => {
    const { token, userInfo } = await GoogleAuth.initAuth()
    const isSignedIn = !!token
    if (userInfo) {
      this.setState({ isSignedIn, userInfo })
    }
  }

  signOutAsync = async () => {
    await GoogleAuth.signOutAsync()
    this.setState({
      isSignedIn: false,
      userInfo: undefined,
      error: undefined,
    })
  }

  render() {
    const { isSignedIn, userInfo } = this.state

    console.log(userInfo)

    if (isSignedIn) {
      if (!userInfo) {
        return (
          <View style={styles.container}>
            <Text>No User</Text>
            <Button title="Sign Out" onPress={this.signOutAsync} />
          </View>
        )
      }

      return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
          <View style={styles.container}>
            <Image source={{ uri: userInfo.photoUrl }} style={styles.image} />
            <Text style={styles.paragraph}>Welcome {userInfo.givenName}</Text>
            <Button title="Sign Out" onPress={this.signOutAsync} />
          </View>
        </ScrollView>
      )
    }

    return (
      <View style={styles.container}>
        <Text>{this.state.error}</Text>
        <TouchableOpacity onPress={this.signInWithGoogleAsync}>
          <View style={styles.buttonContainer}>
            <FontAwesome name="google" size={28} style={{ color: '#fff' }} />
            <Text style={styles.buttonText}>Log in With Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    borderRadius: 64,
    overflow: 'hidden',
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#d3d9e3',
    borderRadius: 5,
    flexDirection: 'row',
    height: 40,
    paddingLeft: 6,
    width: 250,
  },
  buttonText: {
    color: '#222',
    flexGrow: 1,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
})
