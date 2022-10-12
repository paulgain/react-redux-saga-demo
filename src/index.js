import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import userReducer from './slice/users'
import rootSaga from './sagas'

import App from './client/App';
import './index.css';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
