export interface Product {
  id: string,
  name: string,
  price_in_cents: number,
  image_url: string,
}

export interface ProductsFetchResponse {
  data: {
    allProducts: Product[],
  }
}