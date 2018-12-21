// GENERATE config.ts
const Config = process.env

const AppName = Config.APP_NAME || 'TypeScript Expo Apollo Starter'
const AppSlug = Config.APP_SLUG || 'typescript-expo-apollo-starter'

const AndroidBundleId = Config.ANDROID_BUNDLE_ID || 'host.exp.exponent'
const IosBundleId = Config.IOS_BUNDLE_ID || 'host.exp.Exponent'

const stringToConsole = `
import { AuthSession } from 'expo'

const Config = {
  /* Generate Expo App.json */
  APP_NAME: '${AppName}',
  APP_SLUG: '${AppSlug}',

  /* Bundle IDs for Default Expo app -- change if building standalone */
  ANDROID_BUNDLE_ID: '${AndroidBundleId}',
  IOS_BUNDLE_ID: '${IosBundleId}',

  /* RedirectUrl: is used setting the redirect call on auth logins  */
  REDIRECT_URL: AuthSession.getRedirectUrl(),

  GOOGLE_CLIENT_ID: '${Config.GOOGLE_CLIENT_ID}',
  GOOGLE_CLIENT_SECRET: '${Config.GOOGLE_CLIENT_SECRET}',

  GOOGLE_MAPS_ANDROID_API_KEY: '${Config.GOOGLE_MAPS_ANDROID_API_KEY}',
  GOOGLE_MAPS_IOS_API_KEY: '${Config.GOOGLE_MAPS_IOS_API_KEY}',

  FACEBOOK_APP_ID: '${Config.FACEBOOK_APP_ID}',
  FACEBOOK_APP_SCHEME: '${Config.FACEBOOK_APP_SCHEME}',

  GITHUB_CLIENT_ID: '${Config.GITHUB_CLIENT_ID}',
  GITHUB_CLIENT_SECRET: '${Config.GITHUB_CLIENT_SECRET}',

  GRAPHQL_API_URL: '${Config.GRAPHQL_API_URL}',
  GRAPHQL_API_KEY: '${Config.GRAPHQL_API_KEY}', // never commit this for production

  SENTRY: '${Config.SENTRY}',

  MAPBOX_ACCESS_TOKEN: '${Config.MAPBOX_ACCESS_TOKEN}',

  MIXPANEL_ACCESS_TOKEN: '${Config.MIXPANEL_ACCESS_TOKEN}',

  USE_MOCKED: true, // set this to false once you have your GRAPHQL_API_URL setup

  FIREBASE_API_KEY: '${Config.FIREBASE_API_KEY}',
  FIREBASE_AUTH_DOMAIN: '${Config.FIREBASE_AUTH_DOMAIN}',
  FIREBASE_DATABASE_URL: '${Config.FIREBASE_DATABASE_URL}',
  FIREBASE_PROJECT_ID: '${Config.FIREBASE_PROJECT_ID}',
  FIREBASE_STORAGE_BUCKET: '${Config.FIREBASE_STORAGE_BUCKET}',
  FIREBASE_MESSAGING_SENDER_ID: '${Config.FIREBASE_MESSAGING_SENDER_ID}',
}

export default Config
`

console.log(stringToConsole)
