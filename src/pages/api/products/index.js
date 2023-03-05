import dbConnect from "@/util/connectDB";
import Product from "@/models/Product";

export default async function handler(req, res) {
  const { method } = req;

 dbConnect();

 //RECUPERATION DE TOUT LES PRODUITS
 if(method === "GET"){
  try {
    const products = await Product.find();
    res.status(201).json(products);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

  //CREATION D'UN NOUVEAU PRODUIT
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


}
