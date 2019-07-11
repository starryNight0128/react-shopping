import React, { Component } from 'react'
import './Index.css'

import {HashRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'


import GoodList from './GoodList'
import Cart from './Cart'
import NotFound from "./404"

import 'element-theme-default'
import {connect} from 'react-redux'

import store from "./store/store.js"
export default class Index extends Component {

    constructor(){
        super()
        this.state={
            count:this.calcCount()
        }
    }
    
  calcCount = () => {
    let totalCount = 0
    store.getState().forEach(item => {
      totalCount += item.num
    })

    return totalCount
  }

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                count:this.calcCount()
            })
        })

        window.onbeforeunload = ()=>{//在即将离开当前页面时触发事件
            localStorage.setItem('GOODS',JSON.stringify(store.getState()))
        }
        //把仓库里的数据保存到本地中
    }

    componentWillUnmount(){
        store.unsubscribe &&store.unsubscribe()
    }
    render() {
        return (
            <Router>
                <h2 className="title">星夜购物商场
                    <p>
                        <Link to="/goodslist">商品列表</Link>
                        <Link to="/cart">购物车{this.state.count > 0 &&<span>({this.state.count})</span>}</Link>
                    </p>
                </h2>
                <div className="index-container">
                    <Switch>
                         <Route path="/goodslist" component={GoodList}/>
                      <Route path="/cart" component={Cart}/> 
                         <Redirect exact from="/" to="/goodslist"/>
                        <Route component={NotFound}/>
                    </Switch>

                </div>
            </Router>
        )
    }
}
