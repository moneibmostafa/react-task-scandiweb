import { Component } from 'react';
import './ProductsCard.css';
import { getCurrencySymbol } from '../../misc/commonFunction'
import { product } from '../../interfaces';


interface ProductsCardProps {
    product: product,
    selectProduct(e: any, inStock: Boolean): any,
    selectedCurrency: string | undefined,
}

export default class ProductsCard extends Component<ProductsCardProps> {

    render(): JSX.Element | null {
        const { product } = this.props;
        if (!product) return null;
        const currencySymbol = getCurrencySymbol(this.props.selectedCurrency, product.prices[0].currency);
        const priceIndex = product.prices.findIndex((obj) => {
            return obj.currency === this.props.selectedCurrency;
        });
        const amount = priceIndex !== -1 ? product.prices[priceIndex].amount : product.prices[0].amount;
        return(
            <div className="card" id={`${product.name}`} onClick={(e) => this.props.selectProduct(e, product.inStock)}>
                {product.inStock ? <img src={product.gallery[0]} id={`${product.name}`} alt="Avatar" /> : <div><div className='outOfStock'>OUT OF STOCK</div><img src={product.gallery[0]} id={`${product.name}`} alt="Avatar" style={{opacity: 0.5}} /></div>}
                <div id={`${product.name}`} className="container">
                    <title className='card-title' id={`${product.name}`}>{product.name}</title>
                    <label className='card-amount' id={`${product.name}`}>{`${currencySymbol}${amount}`}</label>
                </div>
            </div>
        )
    }
}