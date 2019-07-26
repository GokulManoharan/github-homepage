import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css'

import {startFetchData} from './actions/apiActions'

const store = configureStore()

store.dispatch(startFetchData())

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));