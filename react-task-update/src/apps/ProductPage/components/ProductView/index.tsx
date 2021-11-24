import { Component } from 'react';
import { IProduct, attributes, items } from '../../../../interfaces';
import './styles.css';

interface IProductViewProps {
    product: IProduct,
    selectedImage: any,
    selectedAttribute: any,
    selectAttribute: any,
    currencySymbol: any,
    amount: any,
    addToCart: any,
}

export default class ProductView extends Component<IProductViewProps> {
    renderAttribute = (index: number, attribute: items, type: string, attributeName: string, attributeClassName: any, selectAttribute: any) => {
        const style =
            type === 'swatch'
            ? {background: attribute.value}
            : {undefined};

        const attributeValue =
            type === 'swatch'
            ? ''
            : attribute.value

        return (
            <div 
                key={index}
                id={`${attributeName}-${attribute.value}`}
                className={attributeClassName}
                onClick={selectAttribute}
                style={style}
            >
                {attributeValue}
            </div>
        )
    }

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
            product,
            selectedImage,
            selectedAttribute,
            selectAttribute,
            currencySymbol,
            amount,
            addToCart
        } = this.props;

        const addToCartBoolean = 
            product.attributes
            && product.attributes.length !== 0 ?
            product.inStock && selectedAttribute
            : product.inStock;

        const addToCartClassName = 
            addToCartBoolean
            && Object.keys(selectedAttribute).length === product.attributes.length
            ? 'addToCart active'
            : product.inStock 
            ? 'addToCart'
            : 'addToCart outOfStock';

        const addToCartButtonClick =
            addToCartBoolean
            ? addToCart
            : undefined;

        const addToCartText = 
            product.inStock
            ? 'add to cart'
            : 'out of stock';
            
        const {
            brand: productBrand,
            name: productName,
            attributes: productAttributes,
            description: productDescription,
        } = product;

        return(
            <div className='productView'>
                <div className='mainImage'>
                    {!product.inStock && <div className='outOfStockBanner'>OUT OF STOCK</div>}
                    <img src={selectedImage || product.gallery[0]} alt="main"/>
                </div>
                <div className='info'>
                    <div className='brand'>{productBrand}</div>
                    <div className='name'>{productName}</div>
                    <div className='attributes'>
                        {productAttributes.map((attribute: attributes, index: number) => {
                            return (
                                <div key={index} className='attributesBox'>
                                    <div className='attributeName'>
                                        {(attribute && attribute.name + ':') || ''}
                                    </div>
                                    <div className='attributesValues'>
                                        {attribute
                                        && attribute.items.map((attr: items, index: number) => {
                                            const attributeClassName =
                                                this.attributeValueFound(
                                                    selectedAttribute,
                                                    attribute.name,
                                                    attr.value
                                                )
                                                ? 'attributeLabel selectedAttribute'
                                                : 'attributeLabel';
                                            return (
                                                this.renderAttribute(
                                                    index,
                                                    attr,
                                                    attribute.type,
                                                    attribute.name,
                                                    attributeClassName,
                                                    selectAttribute
                                                )
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='priceTag'>price:</div>
                    <div className='price'>{currencySymbol}{amount}</div>
                    <button className={addToCartClassName} onClick={addToCartButtonClick}>{addToCartText}</button>
                    <div className='description' dangerouslySetInnerHTML={{ __html: productDescription }} />
                </div>
            </div>
        )
    }
}