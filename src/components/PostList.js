import React from 'react'
import {FlatList, Text, View} from 'react-native';
import {Post} from './Post';
import styled from 'styled-components';


export const PostList = ({onOpen, data = []}) => {

    if (!data.length) {
        return <TextWrapper>
            <NoPosts>There are no posts yet</NoPosts>
        </TextWrapper>
    }

    return (
        <Wrapper>
            <FlatList data={data}
                      keyExtractor={post => post.id.toString()}
                      renderItem={({item}) => <Post post={item}
                                                    onOpen={onOpen}/>}
            />
        </Wrapper>
    )
}

const Wrapper = styled(View)`
  padding: 3px;

`
const TextWrapper = styled(View)`
  flex: 1;
  padding: 3px;
  align-items: center;
  justify-content: center;
`
const NoPosts = styled(Text)`
  font-size: 25px;
  text-align: center;
  font-family: open-regular;
  align-items: center;
  justify-content: center;
`
