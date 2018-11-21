import fs from 'fs'

import Config from './config'

const AppConfig = {
  _WARNING_: '',
  expo: {
    name: `${Config.APP_NAME}`,

    description: 'A very interesting project.',

    slug: `${Config.APP_SLUG}`,

    privacy: 'public',

    sdkVersion: '31.0.1',

    platforms: ['ios', 'android'],

    version: '1.0.0',

    orientation: 'portrait',

    icon: './assets/images/icon.png',

    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },

    updates: {
      fallbackToCacheTimeout: 0,
    },

    assetBundlePatterns: ['**/*'],

    facebookDisplayName: `${Config.APP_NAME}`,
    facebookAppId: `${Config.FACEBOOK_APP_ID}`,
    facebookScheme: `${Config.FACEBOOK_APP_SCHEME}`,

    ios: {
      /*
        The bundle identifier for your iOS standalone app.
        You make it up, but it needs to be unique on the App Store.

        stackoverflow.com/questions/11347470/what-does-bundle-identifier-mean-in-the-ios-project.

        iOS bundle identifier notation unique name for your app.
        For example, host.exp.exponent, where exp.host is our domain
        and Expo is our app.
      */
      bundleIdentifier: `${Config.IOS_BUNDLE_ID}`,

      /*
        Build number for your iOS standalone app. Must be a"STRING"
        that matches Apple's format for CFBundleVersion.

        developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html#//apple_ref/doc/uid/20001431-102364.
      */
      buildNumber: '1',

      /*
        Local path or remote URL to an image to use for your app's
        icon on iOS. If specified, this overrides the top-level "icon" key.

        Use a 1024x1024 icon which follows Apple's interface guidelines for icons, including color profile and transparency.

        Expo will generate the other required sizes.
        This icon will appear on the home screen and within the Expo app.
      */
      // icon: 'STRING',

      /*
        Merchant ID for use with Apple Pay in your standalone app.
      */
      // merchantId: 'STRING',

      /*
        URL to your app on the Apple App Store, if you have deployed it there.
        This is used to link to your store page from your Expo project page if your app is public.
      */
      // appStoreUrl: 'STRING',

      /*
        Whether your standalone iOS app supports tablet screen sizes.
        Defaults to `false`.
      */
      // supportsTablet: false,

      /*
        If true, indicates that your standalone iOS app does not support handsets.
        Your app will only support tablets.
      */
      // isTabletOnly: false,

      /*
        Dictionary of arbitrary configuration to add to your standalone app's native Info.plist. Applied prior to all other Expo-specific configuration.

        No other validation is performed, so use this at your own risk of rejection from the App Store.
      */
      // infoPlist: {},

      /*
        An array that contains Associated Domains for the standalone app.
      */
      // associatedDomains: [],

      /*
        A boolean indicating if the app uses iCloud Storage for DocumentPicker.
        See DocumentPicker docs for details.
      */
      // usesIcloudStorage: false,

      config: {
        /*
          Branch (https://branch.io/) key to hook up Branch linking services.
        */
        // branch: {
        //   /*
        //     Your Branch API key
        //   */
        //   apiKey: 'STRING',
        // },

        /*
          Sets `ITSAppUsesNonExemptEncryption` in the standalone ipa's Info.plist to the given boolean value.
        */
        // usesNonExemptEncryption: false,

        /*
          Google Maps iOS SDK key for your standalone app.

          developers.google.com/maps/documentation/ios-sdk/start
        */
        googleMapsApiKey: `${Config.GOOGLE_MAPS_IOS_API_KEY}`,

        /*
          Google Sign-In iOS SDK keys for your standalone app.

          developers.google.com/identity/sign-in/ios/start-integrating
        */
        googleSignIn: `${Config.GOOGLE_SIGNIN_IOS_CLIENT_ID}`,

        /*
          The reserved client ID URL scheme.
          Can be found in GoogeService-Info.plist.
        */
        reservedClientId: `${Config.GOOGLE_SIGNIN_IOS_REVERSED_CLIENT_ID}`,
      },

      splash: {
        /*
          Color to fill the loading screen background 6 character long hex color "STRING", eg: "#000000"
        */
        // backgroundColor: '#000000',
        /*
          Determines how the "image" will be displayed in the splash loading screen.
          Must be one of "cover" or "contain", defaults to "contain".
          Valid values: "cover", "contain"
        */
        // resizeMode: 'contain',
        /*
          Local path or remote url to an image to fill the background of the loading screen.
          Image size and aspect ratio are up to you.
          Must be a .png.
        */
        // image: 'STRING',
        /*
          Local path or remote url to an image to fill the background of the loading screen.
          Image size and aspect ratio are up to you.
          Must be a .png.
        */
        // tabletImage: 'STRING',
      },
    },
    android: {
      /*
        The package name for your Android standalone app.
        You make it up, but it needs to be unique on the Play Store.

        stackoverflow.com/questions/6273892/android-package-name-convention

        Reverse DNS notation unique name for your app.
        For example, host.exp.exponent, where exp.host is our domain and Expo is our app.
      */
      package: `${Config.ANDROID_BUNDLE_ID}`,

      /*
        Version number required by Google Play.
        Increment by one for each release.
        Must be an integer.
        developer.android.com/studio/publish/versioning.html
      */
      versionCode: 1,

      /*
        Local path or remote url to an image to use for your app's icon on Android.
        If specified, this overrides the top-level "icon" key.

        We recommend that you use a 1024x1024 png file.
        Transparency is recommended for the Google Play Store.
        This icon will appear on the home screen and within the Expo app.
      */
      // icon: 'STRING',

      /*
        Settings for an Adaptive Launcher Icon on Android.
        [https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive](https://developer.android.com/guide/practices/ui_guidelines/icon_design_adaptive)
      */
      // adaptiveIcon: {
      //   /*
      //     Local path or remote url to an image to use for
      //     the foreground of your app's icon on Android.

      //     We recommend that you use a 1024x1024 png file,
      //     leaving at least the outer 1/6 transparent on each side.
      //     If specified, this overrides the top-level "icon" and the "android.icon" keys.
      //     This icon will appear on the home screen.
      //   */
      //   foregroundImage: 'STRING',

      //   /*
      //     Color to use as the background for your app's Adaptive Icon on Android.
      //     Defaults to white (#FFFFFF).

      //     Has no effect if "foregroundImage" is not specified.
      //   */
      //   backgroundColor: '#FFFFFF',

      //   /*
      //     Local path or remote url to a background image for
      //     the background of your app's icon on Android.

      //     If specified, this overrides the "backgroundColor" key.
      //     Must have the same dimensions as "foregroundImage", and has no effect if
      //     "foregroundImage" is not specified.
      //   */
      //   backgroundImage: 'STRING',
      // },

      /*
        URL to your app on the Google Play Store, if you have deployed it there.
        This is used to link to your store page from your Expo project page if your app is public.
      */
      // playStoreUrl: 'STRING',

      /*
        List of additional permissions the standalone app will request upon installation,
        along with the minimum necessary for an Expo app to function.

        To use ALL permissions supported by Expo, do not specify the "permissions" key.

        To use ONLY the following minimum necessary permissions and none of the extras supported
        by Expo, set "permissions" to []. The minimum necessary permissions do not require a
        Privacy Policy when uploading to Google Play Store and are:

        •	receive data from Internet
        •	view network connections
        •	full network access
        •	change your audio settings
        •	draw over other apps
        •	prevent device from sleeping

        To use the minimum necessary permissions ALONG with certain additional permissions,
        specify those extras in "permissions", e.g.

        ["CAMERA", "RECORD_AUDIO"]

        Note for ejected projects: To change permissions after ejecting, edit AndroidManifest.xml manually

      */
      permissions: [
        'ACCESS_COARSE_LOCATION',
        'ACCESS_FINE_LOCATION',
        'CAMERA',
        'MANAGE_DOCUMENTS',
        'READ_CONTACTS',
        'READ_CALENDAR',
        'WRITE_CALENDAR',
        'READ_EXTERNAL_STORAGE',
        'READ_PHONE_STATE',
        'RECORD_AUDIO',
        'USE_FINGERPRINT',
        'VIBRATE',
        'WAKE_LOCK',
        'WRITE_EXTERNAL_STORAGE',
        'com.anddoes.launcher.permission.UPDATE_COUNT',
        'com.android.launcher.permission.INSTALL_SHORTCUT',
        'com.google.android.c2dm.permission.RECEIVE',
        'com.google.android.gms.permission.ACTIVITY_RECOGNITION',
        'com.google.android.providers.gsf.permission.READ_GSERVICES',
        'com.htc.launcher.permission.READ_SETTINGS',
        'com.htc.launcher.permission.UPDATE_SHORTCUT',
        'com.majeur.launcher.permission.UPDATE_BADGE',
        'com.sec.android.provider.badge.permission.READ',
        'com.sec.android.provider.badge.permission.WRITE',
        'com.sonyericsson.home.permission.BROADCAST_BADGE',
      ],

      config: {
        /*
          Branch (https://branch.io/) key to hook up Branch linking services.
        */
        // branch: {
        //   /*
        //     Your Branch API key
        //   */
        //   apiKey: 'STRING',
        // },

        /*
          Google Developers Fabric keys to hook up Crashlytics and other services.
          get.fabric.io/
        */
        // fabric: {
        //   /*
        //     Your Fabric API key
        //   */
        //   apiKey: 'STRING',

        //   /*
        //     Your Fabric build secret
        //   */
        //   buildSecret: 'STRING',
        // },

        /*
          Google Maps Android SDK key for your standalone app.
          developers.google.com/maps/documentation/android-api/signup
        */
        googleMaps: {
          /*
            Your Google Maps Android SDK API key
          */
          apiKey: `${Config.GOOGLE_MAPS_ANDROID_API_KEY}`,
        },

        /*
          Google Sign-In Android SDK keys for your standalone app.
          developers.google.com/identity/sign-in/android/start-integrating
        */
        googleSignIn: {
          /*
            The Android API key.
            Can be found in the credentials section of the developer console
            or in "google-services.json"
          */
          apiKey: `${Config.GOOGLE_SIGNIN_ANDROID_CLIENT_ID}`,

          /*
            The SHA-1 hash of the signing certificate used to build the apk without any separator `:`.
            Can be found in "google-services.json".
            developers.google.com/android/guides/client-auth
          */
          certificateHash: `${Config.GOOGLE_SIGNIN_ANDROID_CERTIFICATE_HASH}`,
        },
      },

      /*
        Configuration for loading and splash screen for standalone Android apps.
      */
      // splash: {
      //   /*
      //     Color to fill the loading screen background
      //     6 character long hex color"STRING", eg: "#000000"
      //   */
      //   backgroundColor: '#000000',

      //   /*
      //     Determines how the "image" will be displayed in the splash loading screen.
      //     Must be one of "cover" or "contain", defaults to "contain".
      //     Valid values: "cover", "contain"
      //   */
      //   resizeMode: 'contain',

      //   /*
      //     Local path or remote url to an image to fill the background of the loading screen.
      //     Image size and aspect ratio are up to you.
      //     Must be a .png.
      //   */
      //   ldpi: 'STRING',
      //   mdpi: 'STRING',
      //   hdpi: 'STRING',
      //   xhdpi: 'STRING',
      //   xxhdpi: 'STRING',
      //   xxxhdpi: 'STRING',
      // },

      /*
        Configuration for setting custom intent filters in Android manifest.
        The following example demonstrates how to set up deep links. When
        the user taps a link matching *.myapp.io, they will be shown a
        dialog asking whether the link should be handled by your app or by
        the web browser.

        The data attribute may either be an object or an array of objects. The object may have the following keys to specify attributes of URLs matched by the filter:

        - scheme (string): the scheme of the URL, e.g. "https"
        - host (string): the host, e.g. "myapp.io"
        - port (string): the port, e.g. "3000"
        - path (string): an exact path for URLs that should be matched by the filter, e.g. "/records"
        - pathPattern (string): a regex for paths that should be matched by the filter, e.g. ".*"
        - pathPrefix (string): a prefix for paths that should be matched by the filter, e.g. "/records/" will match "/records/123"
        - mimeType (string): a mime type for URLs that should be matched by the filter

        See Android's documentation for more details on intent filter matching:

        developer.android.com/guide/components/intents-filters

        You may also use an intent filter to set your app as the default handler
        for links (without showing the user a dialog with options). To do so, you
        must set "autoVerify": true on the filter object below, and then
        configure your server to serve a JSON file verifying that you own the
        domain. See Android's documentation for details:

        developer.android.com/training/app-links
      */
      // intentFilters: [
      //   {
      //     action: 'VIEW',
      //     data: {
      //       scheme: 'https',
      //       host: '*.myapp.io',
      //     },
      //     category: ['BROWSABLE', 'DEFAULT'],
      //   },
      // ],
    },
  },
}

AppConfig._WARNING_ = '------- WARNING THIS FILE IS AUTO GENERATED FROM generate-app-config.ts DO NOT EDIT THIS -------'

const AppConfigJSON = JSON.stringify(AppConfig, null, 2)

const path = 'app.json'

fs.writeFile(path, AppConfigJSON, err => {
  if (err) throw err
  console.log(`${path} -- succesfully saved!`)
})
