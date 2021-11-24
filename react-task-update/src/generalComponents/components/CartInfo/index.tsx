import { Component } from 'react';
import { cartItemsObjs, items, attributes } from '../../../interfaces';

interface ICartInfoProps {
    cartItem: cartItemsObjs,
    type: any,
    currencySymbol: any,
    amount: any,
}

export default class CartInfo extends Component<ICartInfoProps> {
    attributeValueFound = (selectedAttributes: any, attributeName: string, attributeValue: string) => {
        if (!attributeName
            || !attributeValue
            || !selectedAttributes
        ) return false;

        if (selectedAttributes[attributeName]
            && selectedAttributes[attributeName] === attributeValue
        ) {
            return true;
        };
        return false;
    }

    render(): JSX.Element {
        const {
            cartItem,
            type,
            currencySymbol,
            amount
        } = this.props;

        const cartInfoClassName = type === 'menu'
            ? 'cartInfoMenu'
            : 'cartInfoCartPage';
        
        const {
            item,
            selectedAttribute,
        } = cartItem;

        const { attributes: cartItemAttributes } : any = 
        cartItem
        && cartItem.item;

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
                {cartItemAttributes
                && cartItemAttributes.length !== 0
                && <div className='attributesList'>
                    {cartItemAttributes.map((attribute: attributes, index: number) => {
                        return (
                            <div key={index} className='attributesBox'>
                                {attribute.items
                                && attribute.items.length !== 0
                                && attribute.items.map((attributeItem: items, index: number) => {
                                    const attributeClassName =
                                        this.attributeValueFound(
                                            selectedAttribute,
                                            attribute.name,
                                            attributeItem.value,
                                        )
                                        ? 'attribute selectedAttribute'
                                        : 'attribute';
                                    const style =
                                        attribute.type === 'swatch'
                                        ? {background: attributeItem.value}
                                        : {undefined};
                                    const attributeValue =
                                        attribute.type === 'swatch'
                                        ? ''
                                        : attributeItem.value
                                    return (
                                        <div 
                                            key={index} 
                                            className={attributeClassName}
                                            style={style}
                                        >
                                            {attributeValue}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}

                </div>

                }


                {/* {attributeItems 
                && <div className='attributesList'>{
                    attributeItems.map((attribute: items, index: any) => {
                        const attributeClassName =
                            attribute.value !== selectedAttribute
                            ? 'attribute'
                            : 'attribute selectedAttribute'
                        return <div key={index} className={attributeClassName}>{attribute.value}</div>
                    })
                }</div>} */}
            </div>
        )
    }
}