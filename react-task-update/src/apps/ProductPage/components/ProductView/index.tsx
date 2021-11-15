import { Component } from 'react';
import { IProduct } from '../../../../interfaces';
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
    renderAttribute = (attributeValue: string, index: any, attributeClassName: any, selectAttribute: any) => {
        if (attributeValue.charAt(0) === '#') {
            return (
                <div 
                    key={index}
                    id={attributeValue}
                    className={attributeClassName}
                    onClick={selectAttribute}
                    style={{ background: attributeValue}}
                />
            )
        }
        return (
            <div 
                key={index}
                id={attributeValue}
                className={attributeClassName}
                onClick={selectAttribute}
            >
                {attributeValue}
            </div>
        )
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
            ? 'addToCart active'
            : 'addToCart';

        const {
            brand: productBrand,
            name: productName,
            attributes: productAttributes,
            description: productDescription,
        } = product;

        return(
            <div className='productView'>
                <div className='mainImage'>
                    <img src={selectedImage || product.gallery[0]} alt="main"/>
                </div>
                <div className='info'>
                    <div className='brand'>{productBrand}</div>
                    <div className='name'>{productName}</div>
                    <div className='attributeName'>
                        {(productAttributes[0] && productAttributes[0].name + ':') || ''}
                    </div>
                    <div className='attributesBox'>
                        {productAttributes[0]
                        && productAttributes[0].items.map((attribute: any, index: number) => {
                            const attributeClassName = 
                                selectedAttribute === attribute.value
                                ? 'attribute selectedAttribute'
                                : 'attribute';
                            return (
                                this.renderAttribute(
                                    attribute.value,
                                    index,
                                    attributeClassName,
                                    selectAttribute
                                )
                            )
                        })}
                    </div>
                    <div className='priceTag'>price:</div>
                    <div className='price'>{currencySymbol}{amount}</div>
                    <button className={addToCartClassName} onClick={addToCart}>add to cart</button>
                    <div className='description' dangerouslySetInnerHTML={{ __html: productDescription }} />
                </div>
            </div>
        )
    }
}