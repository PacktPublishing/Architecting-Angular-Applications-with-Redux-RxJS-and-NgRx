import { ProductModel } from "./product.model";
import { ProductUI } from "./product.ui";

const productModel = new ProductModel();

const productModelUI = new ProductUI(productModel);

console.log("setting title to 'new title'");
productModel.title = "new title";
