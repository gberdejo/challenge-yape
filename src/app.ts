import express from 'express';

const app = express();
app.use(express.json());

app.get('/users', (req: any, res: any) => {
  res.status(200).json({
    name: 'Gabriel',
  });
});

export default app;
