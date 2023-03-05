import dbConnect from "@/util/connectDB";
import Product from "@/models/Product";

export default async function handler(req, res) {
  const { method, query: {id} } = req;

dbConnect();

 //RECUPERATION DE TOUT LES PRODUITS
 if(method === "GET"){
  try {
    const product = await Product.findById(id);
    res.status(201).json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

  //CREATION D'UN NOUVEAU PRODUIT
  if (method === "PUT") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

   //EFFACEMENT DU PRODUIT
   if (method === "DELETE") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


}