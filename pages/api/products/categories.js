import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Afghan Hound','Chow Chow', 'Samoyed', 'Tibetan Mastiff', 'Rottweiler','Afghan Hound','French Bulldog', 'Löwchen'];
  res.send(categories);
});

export default handler;
