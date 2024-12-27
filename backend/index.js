const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./libs/db.js");
const productRoute = require("./routes/product.route.js");
const authRoutes = require("./routes/auth.js");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
connectDb(app);

app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
      methods: ["POST", "GET", "DELETE", "OPTIONS", "PUT", "PATCH"],
    credentials: true,
  })
);

// // Middleware for parsing JSON and URL-encoded data
// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use((req, res, next) => {
  console.log(req.body);
  next();
});

// The body of a multipart/form-data request will be handled by Multer
app.use("/api/products", productRoute);
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Hello from the API server");
});
