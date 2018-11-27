import { Facebook } from 'expo'

import Config from '../../../config'
import AuthHelper from './AuthHelper'

export interface FacebookUserInfo {
  name: string
  email: string
}

class FacebookAuth extends AuthHelper {
  userInfo?: FacebookUserInfo
  authName = 'Facebook'
  storageKey = '@App:FacebookAuthToken'

  async generateTokenAsync() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(Config.FACEBOOK_APP_ID, {
      permissions: ['public_profile', 'email'],
      behavior: 'native',
    })

    if (type !== 'success' || !token) {
      console.log('User canceled Facebook login')
      throw new Error('User canceled sign in')
    }

    return token
  }

  async fetchUserInfoAsync(token: string) {
    const url = `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`
    const response = await fetch(url)
    const userInfo: FacebookUserInfo = await response.json()
    return userInfo
  }
}

export default new FacebookAuth()
