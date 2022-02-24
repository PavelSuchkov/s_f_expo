import React from 'react'
import {DATA} from '../data'
import {Post} from '../components/Post'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {PostList} from '../components/PostList';

export const MainScreen = ({navigation}) => {

    const openPostHandler = (post) => {
        navigation.navigate('Post',
            {postID: post.id, date: post.date, img: post.img, booked: post.booked})
    }

    return (
        <PostList onOpen={openPostHandler} data={DATA}/>
    )
}

MainScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'My blog',
    headerRight: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
            title="Take photo"
            iconName="ios-camera"
            onPress={() => navigation.push('Create') }/>
    </HeaderButtons>,
    headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
            title="Toggle drawer"
            iconName="ios-menu"
            onPress={() => navigation.openDrawer()}
            onBlur={() => navigation.closeDrawer()} />
    </HeaderButtons>
})


