const fetchAllArtworks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/products");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const displayAllArtworks = async () => {
  const artworks = await fetchAllArtworks();
  const artworksContainer = document.querySelector("#wrapper");
  artworksContainer.innerHTML = "";
  artworks.forEach((artwork) => {
    const RootDiv = document.createElement("div");
    RootDiv.classList.add("box");

    const artworkItemHtml = `
      <div class="box">
                    <img src=${artwork.image} alt="" class="product-img">
                    <p>Artist Name: ${artwork.name}</p>
                    <p>Type: Drawing</p>
                    <span class="price">Rs: ${artwork.price}</span>
                    <a href="#" class="btn">Add To Cart</a>
                </div>
                `;

    RootDiv.innerHTML = artworkItemHtml;
    artworksContainer.insertAdjacentElement("beforeend", RootDiv);
  });
};

displayAllArtworks();
