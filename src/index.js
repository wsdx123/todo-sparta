import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import React from 'react'

import store from 'redux/config/configStore'
import Detail from 'routes/detail'
import Home from 'routes/home'

import 'index.css'
import 'reset.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='card/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
