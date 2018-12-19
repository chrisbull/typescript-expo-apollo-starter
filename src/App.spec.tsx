import React from 'react'
import 'react-native'
import reactTestRenderer from 'react-test-renderer'
import NavigationTestUtils from 'react-navigation/NavigationTestUtils'
import App from '../App'

describe('App snapshot', () => {
  jest.useFakeTimers()
  beforeEach(() => {
    NavigationTestUtils.resetInternalState()
  })

  it('renders the loading screen', async () => {
    const tree = reactTestRenderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the root without loading screen', async () => {
    const tree = reactTestRenderer.create(<App skipLoadingScreen={true} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
