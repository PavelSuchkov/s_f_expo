import React, {useState} from 'react'
import AppLoading from 'expo-app-loading';
import {AppNavigation} from './src/navigation/AppNavigation'
import {bootstrap} from './src/bootstrap'
import {Provider} from 'react-redux';
import { store } from './src/store';

function App() {
    const [isReady, setIsReady] = useState(false)

    if (!isReady) {
        return (
            <AppLoading
                startAsync={bootstrap}
                onFinish={() => setIsReady(true)}
                onError={err => console.log(err)}
            />
        )
    }

    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    )
}

export default App
