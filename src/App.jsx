import React from 'react'

const styleObj = {fontSize:50+'px',color:'purple'}

// 导入
import './static/css/App.css'

// 导入子组件

import Cart from './components/cart/Index'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
        }
    }

    render(){
        return(
            <div>
                <Cart />
      
            </div>
        )
    }
}

export default App