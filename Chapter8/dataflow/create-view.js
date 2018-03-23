import { createItem } from "./actions";
import { dispatch, select } from "./redux";

console.log("create item view has loaded");

class CreateItemView {
  saveItem() {
    const elem = document.getElementById("input");
    dispatch(createItem(elem.value));
    const items = select("items");
    console.log(items);
  }
}

const button = document.getElementById("saveButton");
const createItemWiew = new CreateItemView();
button.addEventListener("click", createItemWiew.saveItem);

export default createItemWiew;
