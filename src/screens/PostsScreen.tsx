import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import NewPost from '../components/NewPost'
import PostList from '../components/PostList'

class PostsScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <View style={styles.container}>
        <NewPost />
        <PostList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
})

export default PostsScreen
