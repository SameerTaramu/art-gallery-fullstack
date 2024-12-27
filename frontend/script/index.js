const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/products");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

fetchProducts();

const displayProducts = async () => {
  const products = await fetchProducts();
  const productContainer = document.querySelector(".arts");
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("art-item");
    productDiv.innerHTML = `
      <img src=${product.image} alt="" class="product-img">
                <p>Artist Name: ${product.owner}</p>
                <p>title: ${product.name}</p>
                <h3 class="product-title">Abstract Pic</h3>
                <span class="price">Rs: ${product.price}</span>
                <a href="#" class="btn">Add To Cart</a>
    `;
    productContainer.appendChild(productDiv);
  });
};

const displayUser = () => {
  const user = getUserFromLocalStorage();
  if (user) {
    const userDetails = document.querySelector(".userDetails");
    userDetails.innerHTML = `
      <p>${user.username}</p>
      <p>${user.email}</p>
    `;

    document.querySelector("#user-btn").style.display = "none";
  }
};
displayUser();
displayProducts();
