import { AsyncStorage } from 'react-native'

class Storage {
  async loadString(key: string) {
    try {
      const itemString = await AsyncStorage.getItem(key)
      return itemString
    } catch {
      console.warn(`Error loading string for ${key}`)
      return null
    }
  }

  async saveString(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value)
      return true
    } catch {
      console.warn(`Error saving string for ${key}`)
      return false
    }
  }

  async load(key: string) {
    try {
      const itemString = (await AsyncStorage.getItem(key)) || ''
      return JSON.parse(itemString)
    } catch {
      console.warn(`Error loading object for ${key}`)
      return null
    }
  }

  async save(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value)
      return true
    } catch {
      console.warn(`Error saving item for ${key}`)
      return false
    }
  }

  async remove(key: string) {
    try {
      await AsyncStorage.removeItem(key)
      return true
    } catch {
      console.warn(`Error removing ${key} from storge`)
      return false
    }
  }

  async clear() {
    try {
      await AsyncStorage.clear()
      return true
    } catch {
      console.warn(`Error clearing storage`)
      return false
    }
  }
}

const storage = new Storage()

export default storage
