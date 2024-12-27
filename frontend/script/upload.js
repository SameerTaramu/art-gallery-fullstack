const uploadFormEl = document.querySelector("#upload-form");

const uploadProduct = async (e) => {
  e.preventDefault();

  const title = document.querySelector("#artwork-name").value;
  const price = +document.querySelector("#artwork-price").value; // Ensure price is a number
  const type = document.querySelector("#artwork-type").value;
  const artworkImage = document.querySelector("#artwork-image").files[0];

  // Function to convert file to base64 string
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Convert the image to base64 string
  let artworkImageBase64 = null;
  if (artworkImage) {
    try {
      artworkImageBase64 = await convertToBase64(artworkImage);
    } catch (error) {
      console.error("Error converting file to base64:", error);
      alert("Error processing the file. Please try again.");
      return;
    }
  }

  // Prepare the JSON data
  const productData = {
    name: title,
    price: price,
    type: type,
    owner: "676c2573254af21a9001dd27",
    image: artworkImageBase64, // Include base64 image string
  };

  // Send the data as JSON
  axios
    .post("http://localhost:3000/api/products", productData, {
      headers: {
        "Content-Type": "application/json", // Ensure JSON content type
      },
    })
    .then((response) => {
      console.log(response.data);
      alert("Artwork uploaded successfully!");
    })
    .catch((error) => {
      console.error("Error uploading artwork:", error);
      alert("Error uploading artwork. Please try again.");
    });
};

uploadFormEl.addEventListener("submit", uploadProduct);
