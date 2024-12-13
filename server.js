const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database', err);
  } else {
    console.log('Connected to the PostgreSQL database');
    createTables();
    insertSampleData();
  }
});

function createTables() {
  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      email VARCHAR(255) PRIMARY KEY,
      password VARCHAR(255) NOT NULL
    );
  `;

  const createPostsTableQuery = `
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      body TEXT NOT NULL,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  pool.query(createUsersTableQuery, (err, res) => {
    if (err) {
      console.error('Error creating users table', err);
    } else {
      console.log('Users table created or already exists');
    }
  });

  pool.query(createPostsTableQuery, (err, res) => {
    if (err) {
      console.error('Error creating posts table', err);
    } else {
      console.log('Posts table created or already exists');
    }
  });
}

function insertSampleData() {
  const insertUsersQuery = `
    INSERT INTO users (email, password)
    VALUES
      ('user1@example.com', 'password1'),
      ('user2@example.com', 'password2')
    ON CONFLICT (email) DO NOTHING;
  `;

  const insertPostsQuery = `
    INSERT INTO posts (body)
    VALUES
      ('This is the first post'),
      ('This is the second post')
    ON CONFLICT (id) DO NOTHING;
  `;

  pool.query(insertUsersQuery, (err, res) => {
    if (err) {
      console.error('Error inserting sample data into users table', err);
    } else {
      console.log('Sample data inserted into users table');
    }
  });

  pool.query(insertPostsQuery, (err, res) => {
    if (err) {
      console.error('Error inserting sample data into posts table', err);
    } else {
      console.log('Sample data inserted into posts table');
    }
  });
}

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    pool.end(() => {
      console.log('Database connection pool closed');
    });
  });
});
