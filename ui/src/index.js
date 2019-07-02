import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducers/reducer';
import thunk from 'redux-thunk';
import './stylesheets/main.css';

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

export const store = createStore(reducer,
    {
        servers:[{name:'USA'}],
        filteredServers:[{name:'USA'}]
    },
    allStoreEnhancers
    
);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
