import dispatcher from "./dispatcher";

console.log('selection view loaded');

class SelectionView {
  selectIndex(index) {
    console.log('selected index ', index);
    dispatcher.dispatch({
      type: "SELECT_INDEX",
      data: index
    });
  }
}

const view = new SelectionView();
export default view;
