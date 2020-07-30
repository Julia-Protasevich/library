import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/errorBoundry';
import LibraryService from './services/libraryService';
import {LibraryServiceProvider} from './components/libraryServiceContext';

import store from './store';

const libraryService = new LibraryService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <LibraryServiceProvider value={libraryService}>
                <Router>
                    <App/>
                </Router>
            </LibraryServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById("root")
);