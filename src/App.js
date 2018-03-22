import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import { Container } from 'native-base';
import Router from './Router';


class App extends Component {
    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyAYqp3KdrZKUK_dz-Fyuzwil4Zz4HovnlY',
            authDomain: 'simplesplit-5d7ab.firebaseapp.com',
            databaseURL: 'https://simplesplit-5d7ab.firebaseio.com',
            projectId: 'simplesplit-5d7ab',
            storageBucket: 'simplesplit-5d7ab.appspot.com',
            messagingSenderId: '560934402075'
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <Container>
                    <Router/>
                </Container>
            </Provider>
        )
    }
}

export default App;