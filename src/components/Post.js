import React from 'react'
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const Post = ({ post, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={() => onOpen(post)}>
      <Container>
        <BackgroundImg source={{ uri: post.img }}>
          <TextWrap>
            <TitleText>
              {new Date(post.date).toLocaleDateString()}
            </TitleText>
          </TextWrap>
        </BackgroundImg>
      </Container>
    </TouchableOpacity>

  )
}

const Container = styled(View)`
  margin-bottom: 15px;
  overflow: hidden;
`
const TextWrap = styled(View)`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 0;
  align-items: center;
  width: 100%;
`
const TitleText = styled(Text)`
  color: white;
  font-family: AvenirNext-DemiBold;
`

const BackgroundImg = styled(ImageBackground)`
  width: 100%;
  height: 200px;
`
