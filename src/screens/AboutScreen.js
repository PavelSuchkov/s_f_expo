import React from "react";
import {Text, View } from "react-native";
import styled from 'styled-components'

export const AboutScreen = () => {
  return (
    <Container>
      <Text>
        AboutScreen
      </Text>
    </Container>
  )
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`
