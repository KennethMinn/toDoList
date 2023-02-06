const app = document.querySelector("#app");
const lists = document.querySelector("#lists");
const btn = document.querySelector("#btn");
const total = document.querySelector("#total");
const doneLi = document.querySelector("#done");

const createLi = (label) => {
  const li = document.createElement("li");
  const id = "id" + Date.now();
  li.className =
    "list-group-item d-flex align-items-center justify-content-between";
  li.innerHTML = `
  <div>
      <input type="checkbox" class=" form-check-input me-2" id="${id}">
      <label for="${id}" class=" form-check-label">${label}</label>
  </div>
  <button class="btn border-0"><i class="bi bi-trash3 text-danger del-btn"></i></button>
  `;
  return li;
};

// lists.append(createLi("apple"))
btn.addEventListener("click", (e) => {
  // lists.append("")
  const newValue = prompt("enter a value");
  if (newValue && newValue.trim()) {
    lists.append(createLi(newValue));
  }
  counter();
});

const done = (event) => {
  event.target
    .closest("li")
    .querySelector(".form-check-label")
    .classList.toggle("text-decoration-line-through");
  counter();
};

const counter = () => {
  total.innerText = lists.children.length;
  const doneCount = [...document.querySelectorAll(".form-check-input")].filter(
    (el) => el.checked === true
  ).length;
  doneLi.innerText = doneCount;
};

app.addEventListener("click", (event) => {
  if (event.target.classList.contains("form-check-input")) {
    done(event);
  } else if (event.target.classList.contains("del-btn")) {
    event.target.closest("li").remove();
  }
  counter();
});

// [...document.querySelectorAll(".form-check-input")].filter(el => el.checked === true).length
// [...lists.querySelectorAll(".form-check-input")].filter(el => el.checked === true).length
