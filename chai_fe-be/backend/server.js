import express from 'express';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.get('/', (req, res) => {
  res.send('Hello');
});

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'Why did the tomato turn red?',
      content: 'Because it saw the salad dressing!',
    },
    {
      id: 2,
      title: 'What do you call a fake noodle?',
      content: 'An impasta!',
    },
    {
      id: 3,
      title: 'Why did the golfer bring two pairs of pants?',
      content: 'In case he got a hole in one!',
    },
    {
      id: 4,
      title: 'Why did the scarecrow win an award?',
      content: 'Because he was outstanding in his field!',
    },
    {
      id: 5,
      title: 'What do you call a bear with no teeth?',
      content: 'A gummy bear!',
    },
  ];
  res.json(jokes);
});

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
