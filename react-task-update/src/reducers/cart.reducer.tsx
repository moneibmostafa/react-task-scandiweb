import { AnyAction } from 'redux'
import { navbarConstants, cartConstants } from '../constants'
import { cartState } from '../interfaces'

const initialState: cartState = {
  cartItems: [],

  errors: {},
}

export function cart(state = initialState, action: AnyAction) {
  let productFound: number
  switch (action.type) {
    //////////////////// ADD TO CART //////////////////
    case navbarConstants.ADD_TO_CART:
      productFound = state.cartItems.findIndex((obj) => {
        return (
          obj.item.name === action.item.name
          && obj.selectedAttribute === action.selectedAttribute
        )
      })
      if (productFound > -1) state.cartItems[productFound].count++
      else
        state.cartItems = [
          ...state.cartItems,
          {
            item: action.item,
            count: 1,
            selectedAttribute: action.selectedAttribute,
            image: 0
          },
        ]
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      return {
        ...state,
        cartItems: state.cartItems
      }

    ///////////////// CHANGE ITEM COUNT ///////////////
    case cartConstants.CHANGE_ITEM_COUNT:
      productFound = state.cartItems.findIndex((obj) => {
        return (
          obj.item.name === action.itemName
          && obj.selectedAttribute === action.selectedAttribute
        )
      })
      if (productFound > -1) {
        state.cartItems[productFound].count += action.count
        if (state.cartItems[productFound].count === 0) {
          state.cartItems.splice(productFound, 1)
        }
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      return { ...state, cartItems: state.cartItems }

    ////////////// CHANGE ITEM CART IMAGE /////////////
    case cartConstants.CHANGE_ITEM_CART_IMAGE:
      productFound = state.cartItems.findIndex((obj) => {
        return (
          obj.item.name === action.itemName
          && obj.selectedAttribute === action.selectedAttribute
        )
      })
      if (productFound > -1) {
        state.cartItems[productFound].image += action.image
        if (state.cartItems[productFound].image < 0) state.cartItems[productFound].image = 0
        if (
          state.cartItems[productFound].image >= state.cartItems[productFound].item.gallery.length
        ) {
          state.cartItems[productFound].image =
            state.cartItems[productFound].item.gallery.length - 1
        }
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      return { ...state, cartItems: state.cartItems }

    //////////////////// GO TO CART //////////////////
    case cartConstants.GO_TO_CART:
      // case cart is NOT empty
      if (state.cartItems.length !== 0) return { ...state }
      const cartItems = localStorage.getItem('cartItems')
      const cartItemsJson = typeof cartItems === 'string' ? JSON.parse(cartItems) : undefined
      // case cart is empty && localStorage cart items is empty
      if (!cartItemsJson || (cartItemsJson && cartItemsJson.length === 0)) return { ...state }
      // case localStorage cart items is NOT empty
      return { ...state, cartItems: [...cartItemsJson] }

    ///////////////////// CLEAR STATE ///////////////////
    case cartConstants.CLEAR:
      return { ...initialState }
    default:
      return state
  }
}
