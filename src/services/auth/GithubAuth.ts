import { AuthSession } from 'expo'

import Config from '../../../config'
import AuthHelper from './AuthHelper'

export interface GithubUserInfo {}

class GithubAuth extends AuthHelper {
  userInfo?: GithubUserInfo
  authName = 'Github'
  storageKey = '@App:GithubToken'

  async fetchUserInfoAsync(token: string) {
    const url = `https://api.github.com/user?access_token=${token}&token_type=bearer`
    const response = await fetch(url)
    const userInfo: GithubUserInfo = await response.json()
    return userInfo
  }

  async generateOauthCodeAsync(): Promise<string> {
    const githubFields = [
      'user',
      'public_repo',
      'repo',
      'repo_deployment',
      'repo:status',
      'read:repo_hook',
      'read:org',
      'read:public_key',
      'read:gpg_key',
    ]

    const authUrl =
      `https://github.com/login/oauth/authorize` +
      `?client_id=${Config.GITHUB_CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(Config.REDIRECT_URL)}` +
      `&scope=${encodeURIComponent(githubFields.join(' '))}`

    const response = await AuthSession.startAsync({ authUrl })

    if (response.type !== 'success') {
      throw new Error('User canceled login')
    }

    const { params } = response
    const { error, error_description, code } = params

    if (error) {
      if (error === 'redirect_uri_mismatch')
        console.warn(`Set "Authorization callback URL" in Github settings to ${Config.REDIRECT_URL}`)
      throw new Error(`Github Auth: ${error} ${error_description}`)
    }

    if (!code) throw new Error('GithubAuth: Failure to retrieve github oauth code')

    return code
  }

  async generateTokenAsync() {
    const code = await this.generateOauthCodeAsync()

    const url =
      `https://github.com/login/oauth/access_token` +
      `?client_id=${Config.GITHUB_CLIENT_ID}` +
      `&client_secret=${Config.GITHUB_CLIENT_SECRET}` +
      `&code=${code}`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    const { token_type, scope, access_token } = await response.json()
    console.log('Github generateTokenAsync', { token_type, scope, access_token })

    return access_token
  }
}

export default new GithubAuth()
