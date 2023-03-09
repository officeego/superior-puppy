import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Puppy', 'Gas Cooker', 'Furniture', 'Sneakers'];
  res.send(categories);
});

export default handler;
