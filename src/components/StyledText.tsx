import * as React from 'react'
import { Text, TextProps } from 'react-native'

interface Props extends TextProps {}

export class MonoText extends React.Component<Props> {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />
  }
}
