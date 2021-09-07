import React, { Component } from 'react';
import { connect } from "react-redux";
import { Location } from 'history';
import { ProductsTable } from '../../generalComponents';
import { homepageActions } from '../../actions';
import { homepageState, navbarState } from '../../interfaces';
import './Homepage.css';

interface HomepageProps {
    getCurrencies: any,
    getProductsTable: any,
    handleProductSelection: any,
    homepage: homepageState,
    navbar: navbarState,
    location: Location,
}

class Homepage extends Component<HomepageProps> {
    selectProduct = (e: any, inStock: Boolean) => {
        if (!inStock) return;
        const { id } = e.target;
        this.props.handleProductSelection(id)
    }

    render(): JSX.Element {
        const { activeCategory, filteredProducts, selectedCurrency } = this.props.homepage;
        const { cartMenuToggle } = this.props.navbar;

        let style = { background: '#FFFFFF' }
        if (cartMenuToggle) style = { background: 'rgba(57, 55, 72, 0.22)' }
        return(
            <div className='homepage' style={style}>
                <ProductsTable
                    title = {activeCategory && activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
                    products = {filteredProducts}
                    selectProduct = {this.selectProduct}
                    selectedCurrency = {selectedCurrency}
                />
            </div>
        )
    }
}

function mapState(state: any) {
    const { homepage, navbar } = state;
    return { homepage, navbar };
}
  
const actionCreators = {
    getCurrencies: homepageActions.getCurrencies,
    getProductsTable: homepageActions.getProductsTable,
    handleProductSelection: homepageActions.handleProductSelection,
};
  
const connectedHomepage = connect(mapState, actionCreators)(Homepage);
export { connectedHomepage as Homepage };