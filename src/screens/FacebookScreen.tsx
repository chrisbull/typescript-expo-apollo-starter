import * as React from 'react'
import { Constants, Facebook } from 'expo'
import { Text, TouchableOpacity, View, Alert } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

const FACEBOOK_APP_ID = Constants.manifest.facebookAppId || ''

export class FacebookScreen extends React.Component<NavigationScreenProps> {
  public static navigationOptions = {
    title: 'Facebook',
  }

  public async logIn() {
    const loginResponse = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
      permissions: ['public_profile', 'email'],
      behavior: 'native',
    })

    if (loginResponse.type === 'success') {
      // Get the user's name using Facebook's Graph API.
      const response = await fetch(`https://graph.facebook.com/me?access_token=${loginResponse.token}`)
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`)
    } else if (loginResponse.type === 'cancel') {
      console.log(loginResponse)
      Alert.alert('Login was cancelled')
    } else {
      console.log(loginResponse)
      Alert.alert('There was a problem logging you in.')
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
        <TouchableOpacity onPress={this.logIn}>
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
