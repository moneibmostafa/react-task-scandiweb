import { AnyAction } from 'redux'
import { homepageConstants } from '../constants'
import { IHomepageState } from '../interfaces'

const initialState: IHomepageState = {
  categories: [],
  activeCategory: '',
  currencies: [],
  products: [],
  filteredProducts: [],
  activeProduct: undefined,

  selectedCurrency: undefined,

  loading: false,
  errors: {},
}

export function homepage(state = initialState, action: AnyAction) {
  switch (action.type) {
    //////////////////// GET CURRENCIES ///////////////////
    case homepageConstants.GET_CURRENCIES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case homepageConstants.GET_CURRENCIES_SUCCESS:
      const prevCurrency = localStorage.getItem('selectedCurrency')
      let currency
      if (prevCurrency) {
        currency =
          action.response.currencies.length !== 0 
          && action.response.currencies.find(
            (element: any) => element === prevCurrency
          )
      }
      if (!currency) localStorage.setItem('selectedCurrency', `${action.response.currencies[0]}`)
      return {
        ...state,
        currencies: [...action.response.currencies],
        selectedCurrency: currency || action.response.currencies[0],
        loading: false,
      }
    case homepageConstants.GET_CURRENCIES_FAILURE:
      return {
        ...state,
        selectedCurrency: undefined,
        loading: false,
      }

    //////////////////// GET CURRENCIES ///////////////////
    case homepageConstants.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case homepageConstants.GET_CATEGORIES_SUCCESS:
      const prevActiveCategory = localStorage.getItem('activeCategory');
      let { categories } = action.response;
      categories = categories.map((category: any) => category.name);
      categories = ['all', ...categories];
      const selectedCategory = prevActiveCategory ? prevActiveCategory : categories[0];
      localStorage.setItem('activeCategory', selectedCategory);
      return {
        ...state,
        categories: [...categories],
        activeCategory: selectedCategory,
      }
    case homepageConstants.GET_CATEGORIES_FAILURE:
      return {
        ...state,
        selectedCurrency: undefined,
        loading: false,
      }      

    //////////////////// GET PRODUCTS ///////////////////
    case homepageConstants.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case homepageConstants.GET_PRODUCTS_SUCCESS:
      const { products } = action.response.category
      if (products && products.length !== 0) {
        return {
          ...state,
          products: [...products],
          filteredProducts: [...products],
          loading: false,
        }
      }
      return {
        ...state,
        loading: false,
      }
    case homepageConstants.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
      }

    //////////////////// GET PRODUCT ///////////////////
    case homepageConstants.GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case homepageConstants.GET_PRODUCT_SUCCESS:
      const { product } = action.response
      if (product) {
        return {
          ...state,
          activeProduct: product,
          loading: false,
        }
      }
      return {
        ...state,
        loading: false,
      }
    case homepageConstants.GET_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
      }

    /////////////////// CHANGE CATEGORY //////////////////
    case homepageConstants.CHANGE_CATEGORY:
      const activeCategory = action.categoryName
      localStorage.setItem('activeCategory', `${activeCategory}`)
      return { ...state, activeCategory }

    ///////////////////// CART VIEW ////////////////////
    case homepageConstants.CART_VIEW:
      return { ...state }

    ////////////////// SELECT CURRENCY ////////////////
    case homepageConstants.SELECT_CURRENCY:
      localStorage.setItem('selectedCurrency', `${action.selectedCurrency}`)
      return { ...state, selectedCurrency: action.selectedCurrency }

    ///////////////////// CLEAR STATE ///////////////////
    case homepageConstants.CLEAR:
      return { ...initialState }
    default:
      return state
  }
}
