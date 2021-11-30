import { Component } from 'react';
import { connect } from "react-redux";
import { homepageActions, cartActions } from '../../../actions';
import { IHomepageState, navbarState } from '../../../interfaces';

import ProductsTable from '../components/ProductsTable';

interface IProductsTableContainerProps {
    homepage: IHomepageState,
    navbar: navbarState,
    getProducts: any,
    handleProductSelection: any,
    addToCart: any,
}

class ProductsTableContainer extends Component<IProductsTableContainerProps> {
    async componentDidMount() {
        const { activeCategory } = this.props.homepage;
        if (!activeCategory) return;
        const title =
            activeCategory === 'all'
            ? '' 
            : activeCategory
        await this.props.getProducts(title);
    }

    async componentDidUpdate(prevProps: IProductsTableContainerProps, prevState: any) {
        const { activeCategory } = this.props.homepage;
        if (prevProps.homepage.activeCategory !== activeCategory) {
            const title =
                activeCategory === 'all'
                ? '' 
                : activeCategory
            await this.props.getProducts(title);
        }
    }

    selectProduct = (e: any) => {
        const { id } = e.target;
        if (!id) return;
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
    getProducts: homepageActions.getProductsTable,
    handleProductSelection: homepageActions.getProduct,
    addToCart: cartActions.addToCart,
};
  
const connectedProductsTableContainer = connect(mapState, actionCreators)(ProductsTableContainer);
export { connectedProductsTableContainer as ProductsTableContainer };