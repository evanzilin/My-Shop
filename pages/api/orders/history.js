import Order from "@/models/Order";
import db from "@/utils/db";
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  if (req.method === "GET") {
    return getHandler(req, res);
  }
  return res.status(400).send({ message: "Method not allowed" });
};

const getHandler = async (req, res) => {
  try {
    const session = await getSession({ req });
    if (!session) {
      return res.status(401).send({ message: "Signin required" });
    }

    const userId = session.user._id || session.user.id;

    await db.connect();
    const orders = await Order.find({ user: userId }).sort({ createdAt: -1 });
    await db.disconnect();
    return res.status(200).json(orders);
  } catch (error) {
    try {
      await db.disconnect();
    } catch (e) {}
    return res.status(500).send({ message: error.message });
  }
};

export default handler;
