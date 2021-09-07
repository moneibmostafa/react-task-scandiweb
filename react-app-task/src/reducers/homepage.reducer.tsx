import { AnyAction } from 'redux'
import { history } from '../history';
import { homepageConstants } from '../constants';
import { homepageState, product } from '../interfaces'
  
  const initialState: homepageState = {
    categories: [],
    activeCategory: '',
    currencies: [],
    products: [],
    filteredProducts: [],
    activeProduct: [],

    selectedCurrency: undefined,

    loading: false,
    errors: {},
  }

  const filterProducts = (products: Array<product>, categoryName: string) : Array<product> => {
      const filteredArray = products.filter((product: product) => product.category === categoryName);
      return filteredArray;
  }

  export function homepage(state = initialState, action: AnyAction) {
    switch (action.type) {   
        //////////////////// GET CURRENCIES ///////////////////
        case homepageConstants.GET_CURRENCIES_REQUEST:
          return {
            ...state,
            loading: true,
          };             
        case homepageConstants.GET_CURRENCIES_SUCCESS:
          const prevCurrency = localStorage.getItem('selectedCurrency')
          let currency
          if (prevCurrency) {
            currency = action.response.currencies.length !== 0 && action.response.currencies.find((element: any) => element === prevCurrency) 
          }
          if (!currency) localStorage.setItem('selectedCurrency', `${action.response.currencies[0]}`);

          return {
            ...state,
            currencies: [...action.response.currencies],
            selectedCurrency: currency || action.response.currencies[0],
            loading: false,
          };  
        case homepageConstants.GET_CURRENCIES_FAILURE:
          return {
            ...state,
            selectedCurrency: undefined,
            loading: false,
          };

        //////////////////// GET PRODUCTS ///////////////////
        case homepageConstants.GET_PRODUCTS_REQUEST:
          return {
            ...state,
            loading: true,
          };             
        case homepageConstants.GET_PRODUCTS_SUCCESS:
          const { products } = action.response.category;
          
          if (products && products.length !== 0) {
            const prevActiveCategory = localStorage.getItem('activeCategory')
            let categories: string[];
            let filteredProducts: Array<product>;
            categories = Array.from(new Set(products.map((product: product) => product.category)));
            let selectedCategory = prevActiveCategory ? prevActiveCategory : categories[0]
            filteredProducts = filterProducts(products, selectedCategory);
            localStorage.setItem('activeCategory', selectedCategory);

            return {
              ...state,
              categories: [...categories],
              activeCategory: selectedCategory,
              products: [...products],
              filteredProducts: [...filteredProducts],
              loading: false,
            };  
          }
          return {
            ...state,
            loading: false,
          }
        case homepageConstants.GET_PRODUCTS_FAILURE:
          return {
            ...state,
            loading: false,
          };

        /////////////////// CHANGE CATEGORY //////////////////
        case homepageConstants.CHANGE_CATEGORY:
            const activeCategory = action.categoryName;
            const filteredProducts = filterProducts(state.products, activeCategory);
            localStorage.setItem('activeCategory', `${activeCategory}`);
            return { ...state, activeCategory, filteredProducts };

        /////////////////// SELECT PRODUCT //////////////////
        case homepageConstants.SELECT_PRODUCT:
            const selectedProduct = localStorage.getItem('activeProduct')
            let selectedProductJson = typeof selectedProduct === 'string' ? JSON.parse(selectedProduct) : undefined
            const activeProduct = action.id ? state.filteredProducts.filter((product) => {
              return product.name === action.id;
            }) : state.filteredProducts.filter((product) => {
              return product.name === selectedProductJson;
            })
            if (activeProduct && activeProduct.length !== 0) {
              localStorage.setItem('activeProduct', JSON.stringify(activeProduct[0].name));
              return { ...state, activeProduct: activeProduct };
            }
            history.push('/');
            return { ...state }

        ///////////////////// CART VIEW ////////////////////
        case homepageConstants.CART_VIEW:
            return { ...state } 
           
        ////////////////// SELECT CURRENCY ////////////////
        case homepageConstants.SELECT_CURRENCY:
            localStorage.setItem('selectedCurrency', `${action.selectedCurrency}`);
            return { ...state, selectedCurrency: action.selectedCurrency }             
        
        ///////////////////// CLEAR STATE ///////////////////
        case homepageConstants.CLEAR:
          return { ...initialState };                  
        default:
          return state;
    }
  }
  