import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';

export const CreateScreen = () => {
  return (
    <Container>
      <Text>
        CreateScreen
      </Text>
    </Container>
  )
}

CreateScreen.navigationOptions = ({navigation}) => ({
    headerTitle: 'Create new post',
    headerLeft: <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
            title="Toggle drawer"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
            onBlur={() => navigation.closeDrawer()} />
    </HeaderButtons>
})

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`
