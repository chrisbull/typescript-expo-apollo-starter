import Storage from '../storage'

export default class AuthHelper {
  authName?: string
  storageKey?: string
  authToken?: string
  userInfo?: {}

  async signInAsync() {
    try {
      const token = await this.generateTokenAsync()
      await this.storeAuthTokenAsync(token)

      const userInfo = await this.fetchUserInfoAsync(token)
      await this.storeUserInfoAsync(userInfo)

      return { token, userInfo }
    } catch (error) {
      console.log(`Error: ${this.authName} signInAsync`, error)
      return { error: error.message }
    }
  }

  async generateTokenAsync(): Promise<string> {
    throw new Error('You have not configured generateTokenAsync')
  }

  async fetchUserInfoAsync(token: string): Promise<any> {
    console.log(token)
    throw new Error('You have not configured fetchUserInfoAsync')
  }

  get authTokenKey() {
    return `${this.storageKey}-token`
  }

  get userInfoTokenKey() {
    return `${this.storageKey}-user`
  }

  async initAuth() {
    const token = await this.getAuthTokenAsync()
    const userInfo = await this.getUserInfoAsync()

    return { token, userInfo }
  }

  async signOutAsync() {
    await Storage.remove(this.authTokenKey)
    await Storage.remove(this.userInfoTokenKey)
  }

  /* AUT TOKEN */

  async getAuthTokenAsync() {
    return await Storage.loadString(this.authTokenKey)
  }

  async storeAuthTokenAsync(token: string) {
    await Storage.saveString(this.authTokenKey, token)
  }

  /* USER INFO */

  async storeUserInfoAsync(userInfo: {}) {
    await Storage.save(this.userInfoTokenKey, userInfo)
  }

  async getUserInfoAsync() {
    return await Storage.load(this.userInfoTokenKey)
  }
}
