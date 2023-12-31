import express from "express";
import data from "./data.js";
import cors  from "cors";


const app = express();
const port = 5000;

app.use(cors());

app.get("/api/products", (req, res) => {
    res.send(data.products);
})

app.get("/api/products/:id", (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({ message: "product not found" })
    }
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})