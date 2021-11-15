import { AppDispatch } from '../store'
import { cartConstants, navbarConstants } from '../constants'
import { history } from '../history'

export const cartActions = {
  addToCart,
  changeItemCount,
  changeItemCartImage,
  goToCart,
}

function addToCart(item: any, selectedAttribute: string) {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: cartConstants.ADD_TO_CART,
      item,
      selectedAttribute,
    })
    dispatch({
      type: navbarConstants.CART_MENU_TOGGLE,
    })
  }
}

function changeItemCount(count: number, itemName: string, selectedAttribute: string) {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: cartConstants.CHANGE_ITEM_COUNT,
      count,
      itemName,
      selectedAttribute,
    })
  }
}

function changeItemCartImage(image: number, itemName: string, selectedAttribute: string) {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: cartConstants.CHANGE_ITEM_CART_IMAGE,
      image,
      itemName,
      selectedAttribute,
    })
  }
}

function goToCart() {
  return (dispatch: AppDispatch) => {
    history.push(`/cart`)
    dispatch({
      type: cartConstants.GO_TO_CART,
    })
  }
}
