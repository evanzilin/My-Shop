import Product from '@/models/Product';
import db from '@/utils/db';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    await db.connect();
    const products = await Product.find({});
    await db.disconnect();
    res.status(200).json(products);
  } else {
    res.status(400).send({ message: 'Method not allowed' });
  }
};

export default handler;
