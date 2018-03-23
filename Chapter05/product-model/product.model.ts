import { Subject } from "./subject";

export class ProductModel extends Subject {
  private titleValue = "";
  private makeValue = "";

  get title() {
    return this.titleValue;
  }

  set title(value) {
    this.titleValue = value;
    this.notify();
  }

  get make() {
    return this.makeValue;
  }

  set make(value) {
    this.makeValue = value;
    this.notify();
  }
}
