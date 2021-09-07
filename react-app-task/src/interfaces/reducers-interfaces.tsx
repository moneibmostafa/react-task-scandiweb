import { product } from './api-interfaces'

export interface cartItemsObjs {
    item: product,
    count: number,
    selectedAttribute: ''
}

export interface cartState {
    cartItems: Array<cartItemsObjs>,
    
    errors: {}
}

export interface homepageState {
    categories: string[],
    activeCategory: string,
    currencies: string[],
    products: Array<product>,
    filteredProducts: Array<product>,
    activeProduct: [],

    selectedCurrency: string | undefined,
    
    loading: Boolean,
    errors: {}
}

export interface navbarState {
    cartMenuToggle: boolean,

    cashMenuToggle: boolean,
    cashItems: string[],
    
    errors: {}
}