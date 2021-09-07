import { Component } from 'react';
import { cartItemsObjs } from '../../interfaces';
import './CartVars.css';

interface CartVarsProps {
    cartItem: cartItemsObjs,
    changeItemCount: any,
    cartVarStyle: any,
    plusSignStyle: any,
    negSignStyle: any,
    countStyle: any,
    mainImgStyle: any,
}

export default class CartVars extends Component<CartVarsProps> {
    handleCountChange = (e: any) => {
        const { name } = this.props.cartItem.item;
        const { selectedAttribute } = this.props.cartItem;
        e.target.innerHTML === '+' ? this.props.changeItemCount(1, name, selectedAttribute) : this.props.changeItemCount(-1, name, selectedAttribute)
    }

    render(): JSX.Element {
        const { cartItem } = this.props;

        return(
            <div className='cartVars' style={this.props.cartVarStyle}>
                <div className='plusSign' onClick={this.handleCountChange} style={this.props.plusSignStyle}>+</div>
                <div className='negSign' onClick={this.handleCountChange} style={this.props.negSignStyle}>-</div>
                <label className='count' style={this.props.countStyle}>{cartItem.count}</label>
                <img src={cartItem.item.gallery[0]} alt='mainImage' style={this.props.mainImgStyle}/>
            </div>
        )
    }
}