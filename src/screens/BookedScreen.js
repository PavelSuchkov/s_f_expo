import React from 'react'
import {View} from 'react-native'
import styled from 'styled-components'
import {DATA} from '../data'
import {Post} from '../components/Post'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {PostList} from '../components/PostList';

export const BookedScreen = ({navigation}) => {

    const openPostHandler = (post) => {
        navigation.navigate('Post',
            {postID: post.id, date: post.date, img: post.img, booked: post.booked})
    }

    const filteredData = DATA.filter(p => p.booked)

    return (
        <PostList onOpen={openPostHandler} data={filteredData} />
    )
}

BookedScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Booked',

    headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
            title="Toggle drawer"
            iconName="ios-menu"
            onPress={() => navigation.openDrawer()}
            onBlur={() => navigation.closeDrawer()}/>
    </HeaderButtons>
})


const Wrapper = styled(View)`
  padding: 3px;
`

