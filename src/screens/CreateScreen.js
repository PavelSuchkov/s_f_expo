import React, {useRef, useState} from 'react';
import {Button, Image, Keyboard, ScrollView, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import styled from 'styled-components'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {THEME} from '../theme';
import {useDispatch} from 'react-redux';
import {addPost} from '../store/actions/postActions';
import {PhotoPicker} from '../components/PhotoPicker';

export const CreateScreen = ({navigation}) => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'
    const imgRef = useRef()
    const [photo, setPhoto] = useState(null)

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text,
            img: photo,
            booked: false
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
    }

    const photoPickHandler = (uri) => {
        imgRef.current = uri
    }


    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Container>
                    <Title>CreateScreen</Title>
                    <TextArea placeholder={'type ur text'}
                              value={text}
                              onChangeText={setText}
                              multiline
                              numberOfLines={5}/>
                    {/*<PhotoPicker onPick={photoPickHandler}/>*/}
                    <PhotoPicker onPick={setPhoto}/>
                    {/*<ImageWrapper source={{uri: photo}}/>*/}
                    <Button title={'Create post'}
                            color={THEME.MAIN_COLOR}
                            onPress={saveHandler}
                            disabled={!photo || !text }/>
                </Container>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

CreateScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Create new post',
    headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
            title="Toggle drawer"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
            onBlur={() => navigation.closeDrawer()}/>
    </HeaderButtons>
})

const Container = styled(View)`
  flex: 1;
  padding: 10px;
`
const Title = styled(Text)`
  font-size: 20px;
  text-align: center;
  font-family: open-regular;
  margin: 10px 0 10px 0;
`

const TextArea = styled(TextInput)`
  flex: 1;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px grey;
`
const ImageWrapper = styled(Image)`
  flex: 1;
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  border: 1px grey;
`
