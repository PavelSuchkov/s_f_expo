import React from 'react'
import {FlatList, View} from 'react-native';
import {Post} from './Post';
import styled from 'styled-components';


export const PostList = ({onOpen, data}) => {
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
