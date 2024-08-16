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



    
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  console.log("Fresh Mart is Fresh!");
});

app.listen(port, console.log("FreshMart is Okay!"));
