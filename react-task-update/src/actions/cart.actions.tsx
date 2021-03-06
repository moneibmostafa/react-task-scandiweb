import { AppDispatch } from '../store'
import { cartConstants } from '../constants'
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
  }
}

function changeItemCount(count: number, itemID: string, selectedAttribute: string) {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: cartConstants.CHANGE_ITEM_COUNT,
      count,
      itemID,
      selectedAttribute,
    })
  }
}

function changeItemCartImage(image: number, itemID: string, selectedAttribute: string) {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: cartConstants.CHANGE_ITEM_CART_IMAGE,
      image,
      itemID,
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
