import * as React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Button, ScrollView, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import FacebookAuth, { FacebookUserInfo } from '../services/auth/FacebookAuth'

interface Props {}

interface State {
  userInfo?: FacebookUserInfo
  error?: string
  isSignedIn: boolean
}

export default class FacebookScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Facebook',
  }

  state = {
    isSignedIn: false,
    userInfo: undefined,
    error: undefined,
  }

  componentDidMount() {
    this.attemptToRestoreAuthSync()
  }

  signInWithFacebookAsync = async () => {
    const { token, userInfo, error } = await FacebookAuth.signInAsync()
    const isSignedIn = !!token
    this.setState({ isSignedIn, userInfo, error })
  }

  attemptToRestoreAuthSync = async () => {
    const { token, userInfo } = await FacebookAuth.initAuth()
    const isSignedIn = !!token
    if (userInfo) {
      this.setState({ isSignedIn, userInfo })
    }
  }

  signOutAsync = async () => {
    await FacebookAuth.signOutAsync()
    this.setState({
      isSignedIn: false,
      userInfo: undefined,
      error: undefined,
    })
  }

  render() {
    const { isSignedIn, userInfo } = this.state

    if (isSignedIn) {
      if (!userInfo) {
        return (
          <View style={styles.container}>
            <Text>No User</Text>
            <Button title="Sign Out" onPress={this.signOutAsync} />
          </View>
        )
      }

      console.log(userInfo)

      return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
          <View style={styles.container}>
            <Image source={{ uri: userInfo.picture.data.url }} style={styles.image} />
            <Text style={styles.paragraph}>Welcome {userInfo.name}</Text>
            <Button title="Sign Out" onPress={this.signOutAsync} />
          </View>
        </ScrollView>
      )
    }

    return (
      <View style={styles.container}>
        <Text>{this.state.error}</Text>
        <TouchableOpacity onPress={this.signInWithFacebookAsync}>
          <View style={styles.buttonContainer}>
            <FontAwesome name="facebook-official" size={28} style={{ color: '#fff' }} />
            <Text style={styles.buttonText}>Log in With Facebook</Text>
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
    backgroundColor: '#4267b2',
    borderRadius: 5,
    flexDirection: 'row',
    height: 40,
    paddingLeft: 6,
    width: 250,
  },
  buttonText: {
    color: '#fff',
    flexGrow: 1,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
})
