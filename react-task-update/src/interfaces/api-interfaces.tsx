export interface price {
  currency: string
  amount: number
}

export interface items {
  displayValue: string
  value: string
  id: string
}

export interface attributes {
  id: string
  name: string
  type: string
  items: items[]
}

export interface IProduct {
  id: string
  name: string
  inStock: Boolean
  gallery: string[]
  description: string
  category: string
  attributes: attributes[]
  prices: price[]
  brand: string
}

export interface category {
  name?: string
  products?: IProduct[]
}
