const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://fresh-mart-2cdd0.web.app"],
  })
);

const uri = process.env.MONGO_DB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    console.log("DB Connected");

    const database = client.db("fresh-mart");
    const productsCollection = database.collection("products");

    app.get("/products", async (req, res) => {
      const products = await productsCollection.find().toArray();
      res.send(products);
    });

    app.get("/productsPerPage", async (req, res) => {
      const page = parseInt(req.query.page) - 1;
      const size = parseInt(req.query.size);
      const products = await productsCollection
        .find()
        .skip(page * size)
        .limit(size)
        .toArray();
      res.send(products);
    });

    //get product by search
    app.get("/searchedProducts/:text", async (req, res) => {
      const searchText = req.params.text;
      const finalText = { $regex: searchText, $options: "i" };
      const query = {
        $or: [{ name: finalText }],
      };
      const result = await productsCollection.find(query).toArray();
      res.send(result);
    });

    //get product by search
    app.get("/searchedCategory/:category", async (req, res) => {
      const searchCategory = req.params.category;
      const finalCategory = { $regex: searchCategory, $options: "i" };
      const query = {
        $or: [{ category: finalCategory }],
      };
      const result = await productsCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/products/priceRange", async (req, res) => {
      const minValue = parseInt(req.query.minValue);
      const maxValue = parseInt(req.query.maxValue);
      const products = await productsCollection.find().toArray();
      const filteredProduct = products
        .filter(
          (product) => product.price > minValue && product.price < maxValue
        )
        .sort((a, b) => a.price - b.price);
      res.send(filteredProduct);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Fresh Mart is Fresh!");
});

app.listen(port, console.log("FreshMart is Okay!"));
