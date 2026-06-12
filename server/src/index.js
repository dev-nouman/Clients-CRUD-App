import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); 

app.get('/', (req, res) => {
  res.json({ message: "CORS is working with ES Modules!" });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});