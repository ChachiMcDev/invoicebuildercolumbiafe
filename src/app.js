import './styles/styles.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';

import AppRouter from './routers/AppRouter';
// import LoginPage from './components/LoginPage';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

);


const root = createRoot(document.getElementById('app'));
root.render(jsx);






