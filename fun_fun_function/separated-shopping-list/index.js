let state = {
  items: []
};

let addItem = function(state, item) {
  state.items.push(item);
}

function renderList(state, DOM_element) {
  let itemsHTML = state.items.map(function(item) {
    return `<li> ${item} </li>`;
  });
  DOM_element.html(itemsHTML);
};

$('.shopping-list-add').submit(function(event) {
  event.preventDefault();
  addItem(state, $('.shopping-list-add-input').val());
  renderList(state, $('.shopping-list'));
});
