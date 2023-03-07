import dbConnect from "@/util/connectDB";
import Product from "@/models/Product";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token

 dbConnect();

 //RECUPERATION DE TOUT LES PRODUITS
 if(method === "GET"){
  try {
    const products = await Product.find();
    res.status(200).json(products);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

  //CREATION D'UN NOUVEAU PRODUIT
  if (method === "POST") {
    if(!token || token !== process.env.TOKEN){
      res.status(401).json("Vous n'êtes pas authorisé à consulter cette page")
    }
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


}
