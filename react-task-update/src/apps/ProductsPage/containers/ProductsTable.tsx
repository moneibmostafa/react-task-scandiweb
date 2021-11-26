import { Component } from 'react';
import { connect } from "react-redux";
import { homepageActions, cartActions } from '../../../actions';
import { IHomepageState, navbarState } from '../../../interfaces';

import ProductsTable from '../components/ProductsTable';

interface IProductsTableContainerProps {
    homepage: IHomepageState,
    navbar: navbarState,
    handleProductSelection: any,
    addToCart: any,
}

class ProductsTableContainer extends Component<IProductsTableContainerProps> {
    selectProduct = (e: any) => {
        const { id } = e.target;
        this.props.handleProductSelection(id)
    }

    addToCart = (id: string) => {
        const { filteredProducts } = this.props.homepage;
        const selectedProduct = filteredProducts.filter((product) => product.id === id);
        if (selectedProduct.length !== 0) {
            this.props.addToCart(selectedProduct[0], {});
        }
        return;
    }

    render(): JSX.Element {
        const { filteredProducts, selectedCurrency } = this.props.homepage;
        const { cartMenuToggle } = this.props.navbar;
        return(
            <ProductsTable 
                products = { filteredProducts }
                selectedCurrency = { selectedCurrency }
                selectProduct = { this.selectProduct }
                addToCart={ this.addToCart }
                cartMenuToggle = { cartMenuToggle }
            />
        )
    }
}

function mapState(state: any) {
    const { homepage, navbar } = state;
    return { homepage, navbar };
}
  
const actionCreators = {
    handleProductSelection: homepageActions.getProduct,
    addToCart: cartActions.addToCart,
};
  
const connectedProductsTableContainer = connect(mapState, actionCreators)(ProductsTableContainer);
export { connectedProductsTableContainer as ProductsTableContainer };