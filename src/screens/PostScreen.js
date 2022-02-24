import React, {useEffect} from 'react'
import {Text, View, Image, Button, ScrollView, Alert} from 'react-native'
import styled from 'styled-components'
import {MainScreen} from './MainScreen'
import {DATA} from '../data'
import {THEME} from '../theme'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';

export const PostScreen = ({navigation}) => {

    const postID = navigation.getParam('postID')
    const post = DATA.find(p => p.id === postID)

    const removeHandler = () => {
        Alert.alert(
            'Deleting',
            'R u sure to delete this post?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => console.log('OK Pressed')
                }
            ]
        );
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
    const iconName = booked ? 'ios-star' : 'ios-star-outline'
    return {
        headerTitle: 'Posted ' + new Date(date).toLocaleDateString(),
        headerRight: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title="Take photo"
                iconName={iconName}
                onPress={() => console.log(booked)}/>
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
