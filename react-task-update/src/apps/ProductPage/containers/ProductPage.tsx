import { Component } from 'react';
import { connect } from "react-redux";
import { getCurrencySymbol } from '../../../misc/commonFunction'
import { cartActions, homepageActions } from '../../../actions';
import { navbarState } from '../../../interfaces';
import ProductPage from '../components/ProductPage';

interface ProductPageProps {
    homepage: any,
    navbar: navbarState,
    addToCart: any,
    getProduct: any,
    id: string
}

class ProductPageContainer extends Component<ProductPageProps> {
    async componentDidMount() {
        const { id } = this.props;
        setTimeout(async function(this: any){
            await this.props.getProduct(id);
        }.bind(this), 100);
    }

    state = {
        selectedAttribute: '',
        selectedImage: ''
    }

    selectAttribute = (e: any) => {
        this.setState({ selectedAttribute: e.target.id });
    }

    selectImage = (e: any) => {
        this.setState({ selectedImage: e.target.src });
    }

    addToCart = () => {
        const { activeProduct } = this.props.homepage;
        if (activeProduct && activeProduct.attributes[0] && !this.state.selectedAttribute) return;
        if (activeProduct && !activeProduct.inStock) return;
        else this.props.addToCart(activeProduct, this.state.selectedAttribute);
    }

    render(): JSX.Element {
        const {
            activeProduct,
            selectedCurrency,
        } = this.props.homepage;

        if (activeProduct) {
            const { prices: productPrices } = activeProduct;
            const currencySymbol = getCurrencySymbol(selectedCurrency, productPrices[0].currency);
            const priceIndex = productPrices.findIndex((obj: any) => {
                return obj.currency === selectedCurrency;
            });
            const { amount } = productPrices[priceIndex];
            return(
                <ProductPage 
                    product = { activeProduct }
                    currencySymbol = { currencySymbol }
                    amount = { amount }
                    selectedImage = { this.state.selectedImage }
                    selectedAttribute = { this.state.selectedAttribute }
                    selectImage = { this.selectImage }
                    addToCart = { this.addToCart }
                    selectAttribute = { this.selectAttribute }
                />
            );
        } else {
            return(<h2>Product Not Found ...</h2>);
        }
    }
}

function mapState(state: any) {
    const { homepage, navbar } = state;
    return { homepage, navbar };
}
  
const actionCreators = {
    addToCart: cartActions.addToCart,
    getProduct: homepageActions.getProduct,
};
  
const connectedProductPageContainer = connect(mapState, actionCreators)(ProductPageContainer);
export { connectedProductPageContainer as ProductPageContainer };