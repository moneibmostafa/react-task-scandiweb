import { Component } from 'react';
// import './ProductsCard.css';
import { getCurrencySymbol } from '../../../misc/commonFunction'
import { IProduct } from '../../../interfaces';
import ProductCard from '../components/ProductCard';


interface IProductsCardContainerProps {
    product: IProduct,
    selectProduct(e: any): any,
    selectedCurrency: string | undefined,
    addToCart: any,
}

export default class ProductsCardContainer extends Component<IProductsCardContainerProps> {

    render(): JSX.Element | null {
        const { product } = this.props;
        if (!product) return null;
        const { prices: productPrices } = product;
        const currencySymbol = getCurrencySymbol(this.props.selectedCurrency, productPrices[0].currency);
        const priceIndex = productPrices.findIndex((obj) => {
            return obj.currency === this.props.selectedCurrency;
        });
        const amount = priceIndex !== -1 ? productPrices[priceIndex].amount : productPrices[0].amount;
        return(
            <ProductCard
                product = {product}
                currencySymbol = {currencySymbol}
                amount = {amount}
                selectProduct = {this.props.selectProduct}
                addToCart = {this.props.addToCart}
            />
        )
    }
}