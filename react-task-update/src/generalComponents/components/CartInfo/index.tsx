import { Component } from 'react';
import { cartItemsObjs, items } from '../../../interfaces';

interface ICartInfoProps {
    cartItem: cartItemsObjs,
    type: any,
    currencySymbol: any,
    amount: any,
}

export default class CartInfo extends Component<ICartInfoProps> {
    render(): JSX.Element {
        const {
            cartItem,
            type,
            currencySymbol,
            amount
        } = this.props;
        const { items: attributeItems } : any = cartItem
            && cartItem.item
            && cartItem.item.attributes
            && cartItem.item.attributes.length !== 0
            && cartItem.item.attributes[0].items.length !== 0
            && cartItem.item.attributes[0]
        const cartInfoClassName = type === 'menu'
            ? 'cartInfoMenu'
            : 'cartInfoCartPage';
        
        const {
            item,
            selectedAttribute,
        } = cartItem;
        return(
            <div className={cartInfoClassName}>
                <div className='brand'>
                    {item.brand}
                </div>
                <div className='name'>
                    {item.name}
                </div>
                <label className='price'>
                    {`${currencySymbol}${amount}`}
                </label>
                {attributeItems 
                && <div className='attributesList'>{
                    attributeItems.map((attribute: items, index: any) => {
                        const attributeClassName =
                            attribute.value !== selectedAttribute
                            ? 'attribute'
                            : 'attribute selectedAttribute'
                        return <div key={index} className={attributeClassName}>{attribute.value}</div>
                    })
                }</div>}
            </div>
        )
    }
}