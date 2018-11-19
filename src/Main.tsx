import * as React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
// import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo'

import { mockedLink } from './mock'
import AppNavigator from './navigation/AppNavigator'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: mockedLink, // new HttpLink()
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
})

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </ApolloProvider>
    )
  }
}
