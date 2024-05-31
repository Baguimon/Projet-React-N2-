const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Configuration des options CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Autorise l'origine de votre application frontend
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware pour parser les corps de requêtes JSON
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/courses', (req, res) => {
  res.send([
    {
      id: 1,
      title: 'Course1',
      content: 'Content Content Content Content Content Content Content '
    },
    {
      id: 2,
      title: 'Course2',
      content: 'Content Content Content Content Content Content Content '
    },
  ]);
});

app.post('/courses', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  const newArticle = {
    id: Date.now(),
    title,
    content,
  };

  console.log(`New Article: ${JSON.stringify(newArticle)}`);

  res.status(201).json({ message: 'Article created successfully!', article: newArticle });
});
