/* Inspired by: https://snack.expo.io/@bacon/github */
import * as React from 'react'
import { Text, TouchableOpacity, View, Image, StyleSheet, ScrollView, Button } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import GithubAuth, { GithubUserInfo } from '../services/auth/GithubAuth'

interface Props {}

interface State {
  userInfo?: GithubUserInfo
  error?: string
  isSignedIn: boolean
}

export default class GithubScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Github',
  }

  state = {
    isSignedIn: false,
    userInfo: undefined,
    error: undefined,
  }

  componentDidMount() {
    this.attemptToRestoreAuthSync()
  }

  signInWithGithubAsync = async () => {
    const { token, userInfo, error } = await GithubAuth.signInAsync()
    const isSignedIn = !!token
    this.setState({ isSignedIn, userInfo, error })
  }

  attemptToRestoreAuthSync = async () => {
    const { token, userInfo } = await GithubAuth.initAuth()
    const isSignedIn = !!token
    if (userInfo) {
      this.setState({ isSignedIn, userInfo })
    }
  }

  signOutAsync = async () => {
    await GithubAuth.signOutAsync()
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
            <Image source={{ uri: userInfo.avatar_url }} style={styles.image} />
            <Text style={styles.paragraph}>Welcome {userInfo.name}</Text>
            <Button title="Sign Out" onPress={this.signOutAsync} />
          </View>
        </ScrollView>
      )
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.signInWithGithubAsync()}>
          <View style={styles.buttonContainer}>
            <FontAwesome name="github" size={28} style={{ color: '#fff' }} />
            <Text style={styles.buttonText}>Log in With Github</Text>
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
    backgroundColor: '#efefef',
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
