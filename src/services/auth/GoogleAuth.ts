import { Google } from 'expo'

import Config from '../../../config'
import AuthHelper from './AuthHelper'

export interface GoogleUserInfo {
  id: string
  name: string
  givenName: string
  familyName: string
  photoUrl?: string
  email?: string
}

class GoogleAuth extends AuthHelper {
  authName = 'Google'
  storageKey = '@App:GoogleAuthToken'
  userInfo?: GoogleUserInfo

  async generateTokenAsync() {
    const response = await Google.logInAsync({
      androidClientId: Config.GOOGLE_CLIENT_ID_ANDROID,
      androidStandaloneAppClientId: Config.GOOGLE_CLIENT_ID_ANDROID,
      iosClientId: Config.GOOGLE_CLIENT_ID_IOS,
      iosStandaloneAppClientId: Config.GOOGLE_CLIENT_ID_IOS,
      webClientId: Config.GOOGLE_CLIENT_ID_WEB,
      scopes: ['profile', 'email'],
      behavior: 'web', // 'system' | 'web'
    })

    if (response.type === 'cancel') {
      throw new Error('User canceled sign in')
    }

    const { user, accessToken } = response

    this.userInfo = user

    return accessToken
  }

  async fetchUserInfoAsync() {
    return Promise.resolve(this.userInfo)
  }
}

export default new GoogleAuth()
