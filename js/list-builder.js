const input = document.querySelector("#input");
const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector("#ul");
const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");

const texts = ["hi", "hello", "min ga lr pr", "srr pee p lh"];

const createLi = (text) => {
  const dynamicId = "id" + Math.random();
  const li = document.createElement("li");
  li.className =
    "list-group-item d-flex align-items-center justify-content-between";
  li.innerHTML = `<div class="form-check">
  <input class="form-check-input done-check" type="checkbox" value="" id="${dynamicId}" onchange="done(event)">
  <label class="form-check-label" for="${dynamicId}">
    ${text}
  </label>
</div>
<div class="btn-group btn-group-sm">
  <button class=" btn btn-outline-danger edit-btn"><i class="bi bi-pencil-square pe-none"></i></button>
  <button class=" btn btn-outline-primary del-btn"><i class="bi bi-trash3 pe-none"></i></button>
</div> `;

  return li;
};

const counter = (event) => {
  total.innerText = ul.children.length;
  const done = [...ul.children].filter(
    (el) => el.querySelector(".form-check-input").checked === true
  ).length;
  doneTotal.innerText = done;
};

const done = (event) => {
  event.target
    .closest("li")
    .querySelector(".form-check-label")
    .classList.toggle("text-decoration-line-through");
  counter();
};

const del = (event) => {
  event.target.closest("li").remove();
  counter();
};

const edit = (event) => {
  const old = event.target.closest("li").querySelector(".form-check-label");
  const newText = prompt("enter a new value", old.innerText);
  if (newText && newText.trim()) {
    old.innerText = newText;
  }
};

const addLi = (event) => {
  if (input.value.trim()) {
    ul.append(createLi(input.value));
    input.value = null;
  }
  counter();
};

addBtn.addEventListener("click", addLi);

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addLi();
  }
});

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("del-btn")) {
    del(event);
  } else if (event.target.classList.contains("edit-btn")) {
    edit(event);
  }
});