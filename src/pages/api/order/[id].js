import dbConnect from "@/util/connectDB";
import Order from "@/models/Order";

const handler = async (req, res) => {
  const {method, query: { id }} = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(201).json(order);
    } catch (error) {
      
    }
  }

  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true
      });
      res.status(201).json(order);
    } catch (error) {
      
    }
  }

  if (method === "DELETE") {
  }
  
};

export default handler;
