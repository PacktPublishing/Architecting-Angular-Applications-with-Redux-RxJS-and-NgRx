// @ts-check

import { Observer } from "./observer";
import { ProductModel } from "./product.model";

export class ProductUI implements Observer {
  constructor(private model: ProductModel) {
    this.model.attach(this); // add ProductUI to the observer list
    this.renderUI();
  }

  renderUI() {
    console.log("calling renderUI");
    this.draw();
  }

  draw() {
    // implement
    console.log("calling draw");
  }

  update() {
    console.log("calling update");
    this.renderUI(); // rerender the UI when update() is called
  }
}
