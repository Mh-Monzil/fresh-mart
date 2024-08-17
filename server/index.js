const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

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
    await client.connect();
    console.log("DB Connected");

    const database = client.db("fresh-mart");
    const productsCollection = database.collection("products");

    app.get("/products", async (req, res) => {
        const products = await productsCollection.find().toArray();
        res.send(products);
    });

    app.get("/productsPerPage", async (req, res) => {
      console.log(req.query);
      const page = parseInt(req.query.page) - 1;
      const size = parseInt(req.query.size)
      const products = await productsCollection.find()
      .skip(page * size)
      .limit(size)
      .toArray();
      res.send(products)
  });

   //get product by search
   app.get("/searchedProducts/:text", async (req, res) => {
    const searchText = req.params.text;
    const finalText = new RegExp(searchText, "i");
    const query = {
      $or: [
        { name: finalText },
      ],
    };
    const result = await productsCollection.find(query).toArray();
    res.send(result);
  });

   //get product by search
   app.get("/searchedCategory/:category", async (req, res) => {
    const searchCategory = req.params.category;
    const finalCategory = new RegExp(searchCategory, "i");
    const query = {
      $or: [
        { category: finalCategory },
      ],
    };
    const result = await productsCollection.find(query).toArray();
    res.send(result);
  });


    
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  console.log("Fresh Mart is Fresh!");
});

app.listen(port, console.log("FreshMart is Okay!"));
