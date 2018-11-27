import * as React from 'react'
import renderer from 'react-test-renderer'
// import NavigationTestUtils from 'react-navigation/NavigationTestUtils'

import App from '../App'

describe('App Snapshot', () => {
  jest.useFakeTimers()
  // beforeEach(() => {
  //   NavigationTestUtils.resetInternalState()
  // })

  it('renders the loading screen', async () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the root without loading screen', async () => {
    const tree = renderer.create(<App skipLoadingScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
