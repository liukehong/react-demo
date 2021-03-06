import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../action/goods';

const GOODS = [{
    name: 'iPhone 7',
    price: '6,888',
    amount: 37
}, {
    name: 'iPad',
    price: '3,488',
    amount: 82
}, {
    name: 'MacBook Pro',
    price: '11,888',
    amount: 15
}]; 

class Goods extends Component {
    componentDidMount() {
        // 修改store容器中的数据，dispatch告诉store我要改变数据了，参数是action对象，action对象的参数是type和传进去的数据
        let dispatch = this.props.dispatch;
        dispatch(actions.getGoods(GOODS));
    }
    render() {
        return (
            <ul className="goods">
                {
                    this.props.goods.map((ele, idx) => (
                        <li key={idx} style={{marginBottom: 20, listStyle: 'none'}}>
                            <span>{ele.name}</span> | 
                            <span>￥ {ele.price}</span> | 
                            <span>剩余 {ele.amount} 件</span>
                        </li>
                    ))
                }
            </ul>
        );
    }
}
// 从store容器中获取到对应的数据
const mapStateToProps = (state, ownProps) => ({
    goods: state.goods.data
});
// 将store的数据与组件绑定，只要该数据变化，组件也会随着变化
export default connect(mapStateToProps)(Goods);
