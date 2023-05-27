const inputField = document.querySelector("#main_input_field");
const form = document.querySelector("#input_form");
const searchBox = document.querySelector("#searchbox");

// Event listeners
form.addEventListener("submit", addItem);
searchBox.addEventListener("keyup", searchItems);

function addItem(e) {
  e.preventDefault();
  //   create delete button
  let delBtn = document.createElement("button");
  delBtn.classList.add("del_btn");
  delBtn.innerText = "X";
  // Create list item
  let item = document.createElement("li");
  item.classList.add("list_group_item");
  item.innerText = inputField.value + " ";
  inputField.value = "";
  //   create list node and append item and delete button
  const list = document.querySelector(".list_group");
  list.appendChild(item);
  item.appendChild(delBtn);

  //   select all the delete buttons
  let items = document.querySelectorAll(".del_btn");
  items.forEach((item) => item.addEventListener("click", deleteItem));
}

function deleteItem(e) {
  // confirm prompt is causing performance issue
  // ("[Violation] 'click' handler took <N>ms") but nothing to worry about at this stage
  // It counts time how long it takes to click confirm I think

  if (confirm("Are you sure you want to delet this item!")) {
    e.target.parentElement.remove();
  }
}

function searchItems(e) {
  let searchValue = searchBox.value.toLowerCase();
  let items = document.querySelectorAll(".list_group_item");
  items = Array.from(items);
  items.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchValue)) {
      item.classList.remove("is-hidden");
    } else {
      item.classList.add("is-hidden");
    }
  });
}
