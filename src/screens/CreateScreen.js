import React from "react";
import {Text, View } from "react-native";
import styled from 'styled-components'

export const CreateScreen = () => {
  return (
    <Container>
      <Text>
        CreateScreen
      </Text>
    </Container>
  )
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`
