export class Api {
  createProduct(product) {
    return fetch("/products", { method: "POST", body: product });
  }
}
