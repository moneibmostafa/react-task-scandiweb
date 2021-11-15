import { AppDispatch } from '../store'
import { homepageConstants, cartConstants } from '../constants'
import { homepageService } from '../services'
import { history } from '../history'

export const homepageActions = {
  getCurrencies,
  getProductsTable,
  getProduct,
  restoreCart,
  handleChangeCategory,
  selectCurrency,
}

function getCurrencies() {
  return async (dispatch: AppDispatch) => {
    dispatch(request())
    try {
      const response = await homepageService.getCurrencies()
      dispatch(success(response))
    } catch (ex) {
      dispatch(failure(ex.message))
    }
  }

  function request() {
    return { type: homepageConstants.GET_CURRENCIES_REQUEST }
  }

  function success(response: any) {
    return { type: homepageConstants.GET_CURRENCIES_SUCCESS, response }
  }

  function failure(error: string) {
    return { type: homepageConstants.GET_CURRENCIES_FAILURE, error }
  }
}

function getProductsTable(title?: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(request())
    try {
      const response = await homepageService.getProductsTable(title)
      dispatch(success(response))
    } catch (ex) {
      dispatch(failure(ex.message))
    }
  }

  function request() {
    return { type: homepageConstants.GET_PRODUCTS_REQUEST }
  }

  function success(response: any) {
    return { type: homepageConstants.GET_PRODUCTS_SUCCESS, response }
  }

  function failure(error: string) {
    return { type: homepageConstants.GET_PRODUCTS_FAILURE, error }
  }
}

function getProduct(id: string) {
  return async (dispatch: AppDispatch) => {
    history.push(`/product/${id}`)
    dispatch(request())
    try {
      const response = await homepageService.getProduct(id)
      dispatch(success(response))
    } catch (ex) {
      dispatch(failure(ex.message))
    }
  }

  function request() {
    return { type: homepageConstants.GET_PRODUCT_REQUEST }
  }

  function success(response: any) {
    return { type: homepageConstants.GET_PRODUCT_SUCCESS, response }
  }

  function failure(error: string) {
    return { type: homepageConstants.GET_PRODUCT_FAILURE, error }
  }
}

function restoreCart() {
  return (dispatch: AppDispatch) => {
    dispatch({ type: cartConstants.GO_TO_CART })
  }
}

function handleChangeCategory(categoryName: string) {
  history.push('/')
  return (dispatch: AppDispatch) => {
    dispatch({ type: homepageConstants.CHANGE_CATEGORY, categoryName })
  }
}

function selectCurrency(selectedCurrency: string) {
  return (dispatch: AppDispatch) => {
    dispatch({ type: homepageConstants.SELECT_CURRENCY, selectedCurrency })
  }
}
