import { Component } from 'react';
import { connect } from "react-redux";
import { getCurrencySymbol } from '../../misc/commonFunction'
import { cartActions, homepageActions } from '../../actions';
import './ProductPage.css';
import { navbarState } from '../../interfaces';

interface ProductPageProps {
    homepage: any,
    navbar: navbarState,
    addToCart: any,
    selectedCurrency: string | undefined,
    getActiveProduct: any
}

class ProductPage extends Component<ProductPageProps> {
    componentDidMount() {
        const { activeProduct } = this.props.homepage;
        if (activeProduct && activeProduct.length === 0) {
            setTimeout(function(this: any){
                this.props.getActiveProduct()
            }.bind(this), 100);
        }
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
        if (activeProduct && activeProduct.length !== 0 && activeProduct[0].attributes[0] && !this.state.selectedAttribute) return;
        else this.props.addToCart(activeProduct[0], this.state.selectedAttribute);
    }


    render(): JSX.Element {
        const { activeProduct, selectedCurrency } = this.props.homepage;
        const { cartMenuToggle } = this.props.navbar;

        let style = { background: '#FFFFFF' }
        if (cartMenuToggle) style = { background: 'rgba(57, 55, 72, 0.22)' }

        if (activeProduct && activeProduct.length !== 0) {
            const product = activeProduct[0];
            const currencySymbol = getCurrencySymbol(selectedCurrency, product.prices[0].currency);
            const priceIndex = product.prices.findIndex((obj: any) => {
                return obj.currency === selectedCurrency;
            });
            const { amount } = product.prices[priceIndex];
            const buttonCursor = product.attributes[0] && !this.state.selectedAttribute ? { cursor: 'not-allowed'} : { cursor: 'pointer' };
            return(
                product &&
                <div className='ProductPage' style={style}>
                    <div className='imagesPanel'>
                        {product.gallery.map((image: string, index: number) => {
                            return <img onClick={this.selectImage} key={index} src={image} alt="gallery" />
                        })}
                    </div>
                    <div className='container'>
                        <img src={this.state.selectedImage || product.gallery[0]} alt="main"/>
                        <div className='info'>
                            <div className='title'>{product.name.substr(0, product.name.indexOf(' '))}</div>
                            <div className='restOfTitle'>{product.name.substr(product.name.indexOf(' ')+1)}</div>
                            <div className='attributeName'>{(product.attributes[0] && product.attributes[0].name + ':') || ''}</div>
                            <div className='attributesBox'>{product.attributes[0] && product.attributes[0].items.map((attribute: any, index: number) => {
                                return this.state.selectedAttribute === attribute.value ?
                                    <div key={index} id={attribute.value} className='attribute' onClick={this.selectAttribute} style={{ background: '#1D1F22', color: '#FFFFFF' }}>{attribute.value}</div> :
                                    <div key={index} id={attribute.value} className='attribute' onClick={this.selectAttribute}>{attribute.value}</div>
                            })}</div>
                            <div className='priceTag'>price:</div>
                            <div className='price'>{currencySymbol}{amount}</div>
                            <button className='addToCart' onClick={this.addToCart} style={buttonCursor}>add to cart</button>
                            <div className='desc'>{product.description}</div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(<h2>Please wait ...</h2>);
        }
    }
}

function mapState(state: any) {
    const { homepage, navbar } = state;
    return { homepage, navbar };
}
  
const actionCreators = {
    addToCart: cartActions.addToCart,
    getActiveProduct: homepageActions.getActiveProduct,
};
  
const connectedProductPage = connect(mapState, actionCreators)(ProductPage);
export { connectedProductPage as ProductPage };