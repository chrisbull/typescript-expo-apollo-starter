import * as React from 'react'
import { Facebook, Google } from 'expo'
import { Text, TouchableOpacity, View, Alert } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import Config from '../../config'

export class FacebookScreen extends React.Component<NavigationScreenProps> {
  public static navigationOptions = {
    title: 'Facebook',
  }

  facebookSignIn = async () => {
    try {
      const loginResponse = await Facebook.logInWithReadPermissionsAsync(Config.FACEBOOK_APP_ID, {
        permissions: ['public_profile', 'email'],
        behavior: 'native',
      })

      console.log(loginResponse)

      if (loginResponse.type === 'success') {
        const response = await fetch(`https://graph.facebook.com/me?access_token=${loginResponse.token}`)
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`)
      } else if (loginResponse.type === 'cancel') {
        Alert.alert('Login was cancelled')
      }
    } catch (error) {
      Alert.alert('Facebook sign in error')
    }
  }

  googleSignIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: Config.GOOGLE_SIGNIN_ANDROID_CLIENT_ID,
        iosClientId: Config.GOOGLE_SIGNIN_IOS_CLIENT_ID,
        scopes: ['profile', 'email'],
      })

      if (result.type === 'success') {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
        })
      } else {
        console.log('cancelled')
      }
    } catch (e) {
      console.log('error', e)
    }
  }

  public render() {
    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#fff',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity onPress={this.googleSignIn}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: 5,
              flexDirection: 'row',
              height: 40,
              paddingLeft: 6,
              width: 250,
            }}
          >
            <FontAwesome name="google" size={28} style={{ color: '#fff' }} />
            <Text
              style={{
                color: '#222',
                flexGrow: 1,
                fontSize: 20,
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              Log in With Google
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.facebookSignIn}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#4267b2',
              borderRadius: 5,
              flexDirection: 'row',
              height: 40,
              paddingLeft: 6,
              width: 250,
            }}
          >
            <FontAwesome name="facebook-official" size={28} style={{ color: '#fff' }} />
            <Text
              style={{
                color: '#fff',
                flexGrow: 1,
                fontSize: 20,
                fontWeight: '500',
                textAlign: 'center',
              }}
            >
              Log in With Facebook
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
