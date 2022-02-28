import React, {useCallback, useEffect} from 'react'
import {Text, View, Image, Button, ScrollView, Alert} from 'react-native'
import styled from 'styled-components'
import {MainScreen} from './MainScreen'
import {DATA} from '../data'
import {THEME} from '../theme'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {useDispatch, useSelector} from 'react-redux';
import {removePost, toggleBooked} from '../store/actions/postActions';

export const PostScreen = ({navigation}) => {

    const dispatch = useDispatch()

    const postID = navigation.getParam('postID')

    const post = useSelector(
        state => state.post.allPosts.find(p => p.id === postID))

    const booked = useSelector(state => state.post.bookedPosts
        .some(post => post.id === postID))

    const toggleHandler = useCallback(() => {
        dispatch(toggleBooked(post))
    }, [dispatch, post])

    useEffect(() => {
        navigation.setParams({booked})
    }, [booked])

    useEffect(() => {
        navigation.setParams({toggleHandler})
    }, [toggleHandler])

    const removeHandler = () => {
        Alert.alert(
            'Deleting',
            'R u sure to delete this post?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress() {
                        navigation.navigate('Main')
                        dispatch(removePost(postID))
                    }

                }
            ]
        );
    }


    if(!post) {
        return null
    }

    return (
        <Container>
            <PostImage source={{uri: post.img}}/>
            <TextWrapper>
                <TextTitle>{post.text}</TextTitle>
            </TextWrapper>
            <Button title={'Delete'} color={THEME.DANGER_COLOR} onPress={removeHandler}/>
        </Container>
    )
}

PostScreen.navigationOptions = ({navigation}) => {
    const date = navigation.getParam('date')
    const booked = navigation.getParam('booked')
    const toggleHandler = navigation.getParam('toggleHandler')
    const iconName = booked ? 'ios-star' : 'ios-star-outline'
    return {
        headerTitle: 'Posted ' + new Date(date).toLocaleDateString(),
        headerRight: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title="Take photo"
                iconName={iconName}
                onPress={toggleHandler}/>
        </HeaderButtons>,
    }
}

const Container = styled(ScrollView)`
  flex: 1;
`
const PostImage = styled(Image)`
  width: 100%;
  height: 200px;
`
const TextWrapper = styled(View)`
  padding: 10px;
`
const TextTitle = styled(Text)`
`
