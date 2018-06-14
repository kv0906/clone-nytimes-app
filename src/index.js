import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ArticlesIndex from './containers/ArticlesIndex'
import WebFont from 'webfontloader'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import PostsReducer from './reducers/reducer_articles'
import thunk from 'redux-thunk';

//Load webfont of google
WebFont.load({
  google: {
    families: ['Lato:300,400,700', 'sans-serif']
  }
})

//Main store for app state
const store = createStore(
    PostsReducer,
    applyMiddleware(thunk)
);

//Core render function of application
ReactDOM.render(
    <Provider store={store}>
        <ArticlesIndex/>
    </Provider>
    , document.getElementById('root'));
