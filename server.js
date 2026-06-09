import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    app: 'Baron 58 Multi-Engine Course',
    version: '2.1.0',
    features: ['study-guide', 'vmc-table', 'answer-review', 'full-flashcards', 'comprehensive-exams'],
  });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Baron 58 course running on port ${PORT}`);
});
