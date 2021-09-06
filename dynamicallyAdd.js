const addProduct = () => {
  const userInput = document.getElementById("product-name");
  const userValue = userInput.value;

  // add to ul
  addtoul(userValue);
  // add to local Storage
  addtolocalstorage(userValue);

  // cleardata
  userInput.value = "";
};
// add to ul function
const addtoul = (name) => {
  const listContainer = document.getElementById("product-showcase");
  const creatChild = document.createElement("li");
  creatChild.innerText = name;
  listContainer.appendChild(creatChild);
};
// checking if the cart does exist
const getProductCart = () => {
  const exist = localStorage.getItem("exist");
  let cartobj;
  if (exist) {
    cartobj = JSON.parse(exist);
  } else {
    cartobj = {};
  }

  return cartobj;
};

//  add product to the cart
const addtolocalstorage = (productName) => {
  const cart = getProductCart();
  cart[productName] = 1;
  const cartstringify = JSON.stringify(cart);
  localStorage.setItem("exist", cartstringify);
};
