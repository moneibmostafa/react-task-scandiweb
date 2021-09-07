import { Component } from 'react';
import { getCurrencySymbol } from '../../misc/commonFunction'
import { cartItemsObjs, homepageState } from '../../interfaces';
import { items } from '../../interfaces/api-interfaces';
import './CartInfo.css';

interface CartInfoProps {
    cartItem: cartItemsObjs,
    homepage: homepageState,
    nameStyle: any,
    restOfNameStyle: any,
    priceStyle: any,
    attributesListStyle: any,
    selectedAttributeStyle: any,
    attributeStyle: any,
}

export default class CartInfo extends Component<CartInfoProps> {
    render(): JSX.Element {
        const { cartItem } = this.props;
        const { selectedCurrency } = this.props.homepage;
        const currencySymbol = selectedCurrency && cartItem && getCurrencySymbol(selectedCurrency, cartItem.item.prices[0].currency);
        const priceIndex = cartItem.item.prices.findIndex((obj) => {
            return obj.currency === selectedCurrency;
        });
        const amount = priceIndex !== -1 ? cartItem.item.prices[priceIndex].amount : cartItem.item.prices[0].amount;

        return(
            <div className='cartInfo'>
                <div className='name' style={this.props.nameStyle}>{cartItem.item.name.substr(0, cartItem.item.name.indexOf(' '))}</div>
                <div className='restOfName' style={this.props.restOfNameStyle}>{cartItem.item.name.substr(cartItem.item.name.indexOf(' ')+1)}</div>
                <label className='price' style={this.props.priceStyle}>{`${currencySymbol}${amount}`}</label>
                {cartItem && cartItem.item && cartItem.item.attributes.length !== 0 && cartItem.item.attributes[0].items.length !== 0 && <div className='attributesList' style={this.props.attributesListStyle}>{
                    cartItem.item.attributes[0].items.map((attribute: items, index) => {
                        return attribute.value === cartItem.selectedAttribute ? 
                            <div key={index} className='attribute' style={this.props.selectedAttributeStyle}>{attribute.value}</div> :
                            <div key={index} className='attribute' style={{...this.props.selectedAttributeStyle, ...this.props.attributeStyle}}>{attribute.value}</div>
                    })
                }</div>}
            </div>
        )
    }
}