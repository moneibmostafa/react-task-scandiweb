import { Component } from 'react';
import { IProduct } from '../../../../interfaces';
import cartImg from './addToCartBadge.png';
import './styles.css';


interface IProductCardProps {
    product: IProduct,
    currencySymbol: any,
    amount: any,
    selectProduct(e: any): any,
    addToCart: any,
}

export default class ProductCard extends Component<IProductCardProps> {
    render(): JSX.Element | null {
        const {
            product,
            currencySymbol,
            amount,
            addToCart,
        } = this.props;
        const cardTitleClassName =
            product.inStock
            ? 'card-title'
            : 'card-title outOfStockTitle';
        const cardAmountClassName =
            product.inStock
            ? 'card-amount'
            : 'card-amount outOfStockAmount';
        const imgClassName =
            product.inStock
            ? 'productImg'
            : 'productImg outOfStockImg';

        const {
            id: productID,
            name: productName,
            brand: productBrand,
        } = product;
        return(
            <div
                className="card"
                id={`${productID}`}
                onClick={(e) => this.props.selectProduct(e)}
            >
                <div
                    className='cardImage'
                    id={`${productID}`}
                    onClick={(e) => this.props.selectProduct(e)}
                >
                    {!product.inStock && <div className='outOfStock'>OUT OF STOCK</div>}
                    <img className={imgClassName} src={product.gallery[0]} id={`${productID}`} alt="Avatar" />
                    {product.attributes.length === 0
                    && product.inStock
                    && <div className='addToCartBadge' onClick={() => addToCart(productID)}>
                        <div className='badge'>
                            <img className='cartImg' src={cartImg} alt="" />
                        </div>
                    </div>}
                </div>
                <div id={`${productID}`} className="container">
                    <title className={cardTitleClassName} id={`${productID}`}>{productBrand} {productName}</title>
                    <label className={cardAmountClassName} id={`${productID}`}>{`${currencySymbol}${amount}`}</label>
                </div>
            </div>
        )
    }
}