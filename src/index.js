import React from 'react'
import ReactDOM from 'react-dom/client'

import 'index.css'
import 'reset.css'
import { Provider } from 'react-redux'
import store from 'redux/config/configStore'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from 'routes/detail'
import Home from 'routes/home'

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
