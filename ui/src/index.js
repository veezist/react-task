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
    compose(
        applyMiddleware(thunk),
        window.navigator.userAgent.includes('Chrome') ?
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
      ),
);

export const store = createStore(reducer,
    {
        servers:[{id: 1 ,name:'POLAND',status:'ONLINE'}],
        filteredServers:[{id: 1 ,name:'POLAND',status:'ONLINE'}]
    },
    allStoreEnhancers
    
);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
