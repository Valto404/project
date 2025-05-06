import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Настройка PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Настройка Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Rate-limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use('/contact', contactLimiter);

// Эндпоинт для формы обратной связи
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Все поля обязательны' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Некорректный email' });
  }

  try {
    const query = `
      INSERT INTO contacts (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [name, email, message];
    const result = await pool.query(query, values);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Новое сообщение от ${name}`,
      text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
    };
    await transporter.sendMail(mailOptions);

    res.json({ message: 'Спасибо за сообщение!' });
  } catch (error) {
    console.error('Ошибка:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Получение модельных работ
app.get('/modeling', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM modeling ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Ошибка:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Получение IT-проектов
app.get('/projects', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Ошибка:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Временный эндпоинт для добавления модельных работ
app.post('/modeling', async (req, res) => {
  const { title, description, image_url, video_url } = req.body;

  if (!title || !image_url) {
    return res.status(400).json({ error: 'Название и URL изображения обязательны' });
  }

  try {
    const query = `
      INSERT INTO modeling (title, description, image_url, video_url)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [title, description, image_url, video_url];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Ошибка:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Временный эндпоинт для добавления IT-проектов
app.post('/projects', async (req, res) => {
  const { title, description, technologies, github_url, demo_url, image_url } = req.body;

  if (!title || !technologies) {
    return res.status(400).json({ error: 'Название и технологии обязательны' });
  }

  try {
    const query = `
      INSERT INTO projects (title, description, technologies, github_url, demo_url, image_url)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [title, description, technologies, github_url, demo_url, image_url];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Ошибка:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'Бэкенд работает!' });
});

app.listen(PORT, () => console.log(`Server запущен на http://localhost:${PORT}`));