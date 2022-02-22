import React from "react";
import {Text, View } from "react-native";
import styled from 'styled-components'

export const BookedScreen = () => {
  return (
    <Container>
      <Text>
        BookedScreen
      </Text>
    </Container>
  )
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`
