import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import {Alert, Button, Image, View} from 'react-native';
import styled from 'styled-components';

async function askForPermissions() {
    const {status} = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
    )
    if (status !== 'granted') {
        Alert.alert('You must enable camera')
        return false
    }
    return true
}

export const PhotoPicker = ({onPick}) => {

    const [image, setImage] = useState(null)

    const takePhoto = async () => {
        const hasPermissions = await askForPermissions()
        if (!hasPermissions) {
            return
        }
        const img = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9]
        })
        setImage(img.uri)
        onPick(img.uri)
    }

    return (
        <Wrapper>
            <Button title="take photo" onPress={takePhoto}/>
            {image && <Photo source={{uri: image}}/>}
        </Wrapper>
    )
}

const Wrapper = styled(View)`
  margin-bottom: 10px;
`
const Photo = styled(Image)`
  margin-top: 10px;
  width: 100%;
  height: 200px;
`
