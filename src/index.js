import React from 'react'
import ReactDOM from 'react-dom'

//导入根组件
import App from './App.jsx'

import {Provider} from 'react-redux'

import store from './components/cart1/store/store'

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>  ,
document.getElementById("root")
)
