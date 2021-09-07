export interface price {
    currency: string,
    amount: number
}

export interface items {
    displayValue: string,
    value: string,
    id: string
}

export interface attributes {
    id: string,
    name: string,
    type: string,
    items: Array<items>
}

export interface product {
    name: string,
    inStock: Boolean,
    gallery: string[],
    description: string,
    category: string,
    attributes: Array<attributes>
    prices: Array<price>,
}

export interface category {
    name?: string,
    products?: Array<product>
}

export interface menuStyle {
    height: string,
    display?: string,
}