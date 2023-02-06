const products = [
  {
    id: 1,
    name: "iphone 14 pro max",
    price: 1266,
    photo: "../photos/26be56634ad9773c9d8f6315cac2cba7.jpg",
  },
  {
    id: 2,
    name: "samsung galaxy",
    price: 825,
    photo: "../photos/38c17b657fc52cd82c67da0dc15dfa5c.jpg",
  },
  {
    id: 3,
    name: "red mi",
    price: 324,
    photo: "../photos/70338373b44f1a33673ce54dbe342f53.jpg",
  },
  {
    id: 4,
    name: "huawei",
    price: 584,
    photo: "../photos/ac0083856d41564f1526c65077a9882d.jpg",
  },
];

const lists = document.querySelector("#lists");
const app = document.querySelector("#app");
const form = document.querySelector("#form");
// const plusBtn = document.querySelector("#plusBtn");
// const minusBtn = document.querySelector("#minusBtn");
// const qty = document.querySelector("#qty");

const createLi = (items) => {
  //   const { id, photo, name, price } = item;
  const li = document.createElement("li");
  const { id, name, price, photo } = items;
  li.setAttribute("unit-price", price);
  li.className = "list-group-item px-4";
  li.id = id;
  li.innerHTML = `
    <div class="row align-items-center">
                <div class="col-3">
                  <img
                    src="${photo}"
                    class="photo"
                  />
                </div>
                <div class="col-3">
                  <h6>${name}</h6>
                  <small>256 gb</small>
                </div>
                <div class="col-2">
                  <div class="d-flex align-items-center">
                    <a href="#" class="btn border-0 minusBtn">
                      <i class="bi bi-dash pe-none"></i>
                    </a>
                    <small class="border qty px-2">1</small>
                    <a href="#" class="btn border-0 plusBtn">
                      <i class="bi bi-plus-lg pe-none"></i>
                    </a>
                  </div>
                </div>
                <div class="col-2 offset-1">
                  <div>$ <span class="price">${price}</span></div>
                </div>
                <div class="col-1">
                  <button class="btn text-danger del-btn border-0">
                    <i class="bi bi-trash pe-none"></i>
                  </button>
                </div>
              </div>
    `;
  return li;
};

products.forEach((product) => {
  console.log(product);
  lists.append(createLi(product));
});

lists.addEventListener("click", (event) => {
  //   const plusBtn = event.target.closest("li").querySelector(".plusBtn");
  //   const minusBtn = event.target.closest("li").querySelector(".minusBtn");
  const qty = event.target.closest("li").querySelector(".qty");
  const price = event.target.closest("li").querySelector(".price");
  const unitPrice = event.target.closest("li").getAttribute("unit-price");

  if (event.target.classList.contains("plusBtn")) {
    qty.innerText = parseFloat(qty.innerText) + 1;
    price.innerText = parseFloat(qty.innerText) * parseFloat(unitPrice);
    // console.log(price.innerText, unitPrice);
  } else if (event.target.classList.contains("minusBtn")) {
    qty.innerText = parseFloat(qty.innerText) - 1;
    price.innerText = parseFloat(qty.innerText) * parseFloat(unitPrice);
  } else if (event.target.classList.contains("del-btn")) {
    event.target.closest("li").remove();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  //   console.log(formData.get("price"))
  const id = "id" + Date.now();
  products.push({
    id,
    name: formData.get("name"),
    price: formData.get("price"),
    photo: formData.get("image"),
  });

  const newProducts = products.find((product) => product.id === id);
  //   console.log(newProducts)
  lists.append(createLi(newProducts));
  event.target.reset();
});
