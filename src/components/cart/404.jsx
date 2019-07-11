import React, { Component } from 'react';

// 加载图片
import img from '../../static/image/404.jpg'

class NotFound extends Component {
    render() {
        return (
            <div>
                <img src={img} alt=""/>
            </div>
        );
    }
}

export default NotFound;