import { IProduct } from './api-interfaces'

export interface cartItemsObjs {
  item: IProduct
  image: number
  count: number
  selectedAttribute: ''
}

export interface cartState {
  cartItems: cartItemsObjs[]

  errors: {}
}

export interface IHomepageState {
  categories: string[]
  activeCategory: string
  currencies: string[]
  products: IProduct[]
  filteredProducts: IProduct[]
  activeProduct: IProduct | undefined

  selectedCurrency: string | undefined

  loading: Boolean
  errors: {}
}

export interface navbarState {
  cartMenuToggle: boolean

  cashMenuToggle: boolean
  cashItems: string[]

  errors: {}
}
