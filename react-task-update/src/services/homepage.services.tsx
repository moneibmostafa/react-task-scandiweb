import { getRequest } from '../queries'

export const homepageService = {
  getCurrencies,
  getProductsTable,
  getProduct,
}

async function getCurrencies() {
  const query = `currencies`
  const response = await getRequest(query)
  return response
}

async function getProductsTable(title?: string) {
  const query = `
      category(input: { title: "${title}"}) {
        name
        products
           {
            id
            name
            inStock
            gallery
            description
            category
            attributes {
              id
              name
              type
              items {
                displayValue
                value
                id
              }
            }
            prices {
              currency
              amount
            }
            brand
          }
      }
    `
  const response = await getRequest(query)
  return response
}

async function getProduct(id: string) {
  const query = `
    product(id: "${id}") {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency
        amount
      }
      brand
    }
  `
  const response = await getRequest(query)
  return response
}
