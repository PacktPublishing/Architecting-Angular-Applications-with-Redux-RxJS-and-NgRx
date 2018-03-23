import { selectIndex, createProduct, removeProduct } from "product.actions";

function View() {
  this.selectIndex = index => {
    selectIndex(index);
  };

  this.createProduct = product => {
    createProduct(product);
  };

  this.removeProduct = product => {
    removeProduct(product);
  };
}

var view = new View();
