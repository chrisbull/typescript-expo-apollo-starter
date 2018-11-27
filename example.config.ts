import { AuthSession } from 'expo'

const Config = {
  APP_NAME: 'TypeScript Expo Apollo Starter',
  APP_SLUG: 'typescript-expo-apollo-starter',

  ANDROID_BUNDLE_ID: 'host.exp.exponent',
  IOS_BUNDLE_ID: 'host.exp.Exponent',

  // GOOGLE_CLIENT_ID_IOS: '',
  // GOOGLE_CLIENT_ID_ANDROID: '',
  // GOOGLE_CLIENT_ID_WEB: '',

  // GOOGLE_CLIENT_ID: '',

  // GOOGLE_MAPS_ANDROID_API_KEY: '',
  // GOOGLE_MAPS_IOS_API_KEY: '',

  // FACEBOOK_APP_ID: '',
  // FACEBOOK_APP_SCHEME: '',

  // GITHUB_CLIENT_ID: '',
  // GITHUB_CLIENT_SECRET: '',

  // GRAPHQL_API_URL: '',
  // SENTRY: '',
  // MAPBOX_ACCESS_TOKEN: '',
  // MIXPANEL_ACCESS_TOKEN: '',

  REDIRECT_URL: AuthSession.getRedirectUrl(),

  // FIREBASE: {
  //   apiKey: '',
  //   authDomain: '',
  //   databaseURL: '',
  //   projectId: '',
  //   storageBucket: '',
  //   messagingSenderId: '',
  // },
}

export default Config
