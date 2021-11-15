import { Component } from 'react';
import { IProduct } from '../../../../interfaces';
import ImagePanelContainer from '../../containers/ImagePanel';
import ProductViewContainer from '../../containers/ProductView';
import './styles.css';

interface IProductPageProps {
    product: IProduct,
    currencySymbol: any,
    amount: any,
    selectedImage: any,
    selectedAttribute: any,
    selectImage: any,
    addToCart: any,
    selectAttribute: any,
}

export default class ProductPage extends Component<IProductPageProps> {
    render(): JSX.Element {
        const {
            product,
            currencySymbol,
            amount,
            selectedImage,
            selectedAttribute,
            selectImage,
            addToCart,
            selectAttribute
        } = this.props;
        return(
            product &&
            <div className='ProductPage'>
                <ImagePanelContainer 
                    product = { product }
                    selectImage = { selectImage }
                />
                <ProductViewContainer
                    product = { product }
                    selectedImage = { selectedImage }
                    selectedAttribute = { selectedAttribute }
                    selectAttribute = { selectAttribute }
                    currencySymbol = { currencySymbol }
                    amount = { amount }
                    addToCart = { addToCart }
                />
            </div>
        )
    }
}