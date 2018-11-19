import React from 'react'
import { Text, TextProps } from 'react-native'

interface Props extends TextProps {}

export const MonoText = (props: Props) => <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
