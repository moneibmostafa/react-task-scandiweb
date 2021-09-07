import { AppDispatch } from '../store'
import { homepageConstants, cartConstants } from '../constants';
import { homepageService } from '../services';
import { history } from "../history";

export const homepageActions = {
    getCurrencies,
    getProductsTable,
    restoreCart,
    handleChangeCategory,
    handleProductSelection,
    selectCurrency,
    getActiveProduct,
};

  function getCurrencies() {
    return async (dispatch: AppDispatch) => {
        dispatch(request());
        try {
          const response = await homepageService.getCurrencies();
          dispatch(success(response));
        } catch (ex) {
          dispatch(failure(ex.message));
        }
      };
    
      function request() {
        return {type: homepageConstants.GET_CURRENCIES_REQUEST};
      }
    
      function success(response: any) {
        return {type: homepageConstants.GET_CURRENCIES_SUCCESS, response};
      }
    
      function failure(error: string) {
        console.log(error);
        return {type: homepageConstants.GET_CURRENCIES_FAILURE, error};
      }
  }

  function getProductsTable(title?: String) {
    return async (dispatch: AppDispatch) => {
        dispatch(request());
        try {
          const response = await homepageService.getProductsTable(title);
          dispatch(success(response));
        } catch (ex) {
          dispatch(failure(ex.message));
        }
      };
    
      function request() {
        return {type: homepageConstants.GET_PRODUCTS_REQUEST};
      }
    
      function success(response: any) {
        return {type: homepageConstants.GET_PRODUCTS_SUCCESS, response};
      }
    
      function failure(error: string) {
        console.log(error);
        return {type: homepageConstants.GET_PRODUCTS_FAILURE, error};
      }
  }

  function restoreCart() {
    return (dispatch: AppDispatch) => {
      dispatch({type: cartConstants.GO_TO_CART});
    };
  }

  function handleChangeCategory(categoryName: string) {
    history.push('/')
    return (dispatch: AppDispatch) => {
      dispatch({type: homepageConstants.CHANGE_CATEGORY, categoryName});
    };
  }

  function handleProductSelection(id: string) {
    return (dispatch: AppDispatch) => {
      history.push(`/product/${id}`);
      dispatch({type: homepageConstants.SELECT_PRODUCT, id});
    };
  }

  function selectCurrency(selectedCurrency: string) {
    return (dispatch: AppDispatch) => {
      dispatch({type: homepageConstants.SELECT_CURRENCY, selectedCurrency});
    };
  }

  function getActiveProduct() {
    return (dispatch: AppDispatch) => {
      dispatch({type: homepageConstants.SELECT_PRODUCT});
    };
  }