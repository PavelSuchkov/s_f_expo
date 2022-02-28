import React, {useEffect} from 'react'
import {DATA} from '../data'
import {Post} from '../components/Post'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {PostList} from '../components/PostList';
import {useDispatch, useSelector} from 'react-redux';
import {loadPosts} from '../store/actions/postActions';
import {store} from '../store';
import styled from 'styled-components';
import {ActivityIndicator, View} from 'react-native';
import {THEME} from '../theme';

export const MainScreen = ({navigation}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const allPosts = useSelector(state => state.post.allPosts)
    const loading = useSelector(state => state.post.loading)

    const openPostHandler = (post) => {
        navigation.navigate('Post',
            {postID: post.id, date: post.date, img: post.img, booked: post.booked})
    }

    if (loading) {
        return (
            <Loading>
                <ActivityIndicator color={THEME.MAIN_COLOR}/>
            </Loading>
        )
    }

    return (
        <PostList onOpen={openPostHandler} data={allPosts}/>
    )
}


MainScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'My blog',
    headerRight: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
            title="Take photo"
            iconName="ios-camera"
            onPress={() => navigation.push('Create')}/>
    </HeaderButtons>,
    headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
            title="Toggle drawer"
            iconName="ios-menu"
            onPress={() => navigation.openDrawer()}
            onBlur={() => navigation.closeDrawer()}/>
    </HeaderButtons>
})

const Loading = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

