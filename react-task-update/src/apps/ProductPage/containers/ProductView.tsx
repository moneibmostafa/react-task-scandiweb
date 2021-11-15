import { Component } from 'react';
import ProductView from '../components/ProductView';
import { IProduct } from '../../../interfaces';

interface IProductViewContainerProps {
    product: IProduct,
    selectedImage: any,
    selectedAttribute: any,
    selectAttribute: any,
    currencySymbol: any,
    amount: any,
    addToCart: any,
}

export default class ProductViewContainer extends Component<IProductViewContainerProps> {
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

        return (
            <ProductView 
                product = { product }
                selectedImage = { selectedImage }
                selectedAttribute = { selectedAttribute }
                selectAttribute = { selectAttribute }
                currencySymbol = { currencySymbol }
                amount = { amount }
                addToCart = { addToCart }
            />
        )
    }
}