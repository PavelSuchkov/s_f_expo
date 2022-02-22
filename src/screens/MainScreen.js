import React from 'react'
import {Button, Text, View, FlatList} from 'react-native'
import styled from 'styled-components'
import {DATA} from '../data'
import {Post} from '../components/Post'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';

export const MainScreen = ({navigation}) => {

    const openPostHandler = (post) => {
        navigation.navigate('Post',
            {postID: post.id, date: post.date, img: post.img, booked: post.booked})
    }

    return (
        <Wrapper>
            <FlatList data={DATA}
                      keyExtractor={post => post.id.toString()}
                      renderItem={({item}) => <Post post={item}
                                                    onOpen={openPostHandler}/>}
            />


        </Wrapper>
    )
}

MainScreen.navigationOptions = {
    headerTitle: 'My blog',
    headerRight: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
            title="Take photo"
            iconName="ios-camera"
            onPress={() => console.log('pressed')}/>
    </HeaderButtons>,
    headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
            title="Toggle drawer"
            iconName="ios-menu"
            onPress={() => console.log('pressed')}/>
    </HeaderButtons>
}


const Wrapper = styled(View)`
  padding: 3px;
`

