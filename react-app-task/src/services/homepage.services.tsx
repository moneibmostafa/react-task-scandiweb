import { getRequest } from "../queries";

export const homepageService = {
    getCurrencies,
    getProductsTable,
};

async function getCurrencies() {
    const query = `currencies`
    const response = await getRequest(query);
    return response;
}

async function getProductsTable(title?: String) {
    const query = `
    category(input: { title: "${title}"}) {
        products {
          category
          name
          inStock
          gallery
          prices {
            currency
            amount
          }
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
          description
        }
      }
    ` 
    const response = await getRequest(query);
    return response;
}