import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Delegate Vote!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
