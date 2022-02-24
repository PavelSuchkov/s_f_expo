import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';

export const AboutScreen = () => {
    return (
        <Container>
            <AboutText>Nice application for personal notes</AboutText>
            <AboutText>Version <BoldText>0.1</BoldText></AboutText>
        </Container>
    )
}

AboutScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'About application',
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
  justify-content: center;
  align-items: center;
`
const AboutText = styled(Text)`
  font-family: 'open-regular';
  font-size: 20px;
`
const BoldText = styled(Text)`
  font-family: 'open-bold';
`
