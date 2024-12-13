const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken library
const helmet = require('helmet'); // Import helmet for secure headers
const { body, validationResult } = require('express-validator'); // Import express-validator for request validation
const sanitize = require('sanitize-html'); // Import sanitize-html for input sanitization

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(helmet()); // Set up secure headers

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

app.post('/api/auth/signup', 
  // Request validation
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Sanitize user inputs
    const sanitizedEmail = sanitize(email);
    const sanitizedPassword = sanitize(password);

    const insertUserQuery = `
      INSERT INTO users (email, password)
      VALUES ($1, $2)
      RETURNING email;
    `;

    pool.query(insertUserQuery, [sanitizedEmail, sanitizedPassword], (err, result) => {
      if (err) {
        console.error('Error inserting user', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        const token = jwt.sign({ email: sanitizedEmail }, 'your_jwt_secret', { expiresIn: '1h' }); // Generate JWT token
        res.status(201).json({ token });
      }
    });
  }
);

app.post('/api/auth/login', 
  // Request validation
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Sanitize user inputs
    const sanitizedEmail = sanitize(email);
    const sanitizedPassword = sanitize(password);

    const findUserQuery = `
      SELECT * FROM users WHERE email = $1 AND password = $2;
    `;

    pool.query(findUserQuery, [sanitizedEmail, sanitizedPassword], (err, result) => {
      if (err) {
        console.error('Error finding user', err);
        res.status(500).json({ error: 'Internal server error' });
      } else if (result.rows.length === 0) {
        res.status(401).json({ error: 'Invalid credentials' });
      } else {
        const token = jwt.sign({ email: sanitizedEmail }, 'your_jwt_secret', { expiresIn: '1h' }); // Generate JWT token
        res.status(200).json({ token });
      }
    });
  }
);

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to authenticate token' });
    }

    req.userId = decoded.id;
    next();
  });
}

app.get('/api/posts', verifyToken, (req, res) => {
  const getPostsQuery = `
    SELECT * FROM posts;
  `;

  pool.query(getPostsQuery, (err, result) => {
    if (err) {
      console.error('Error fetching posts', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(200).json(result.rows);
    }
  });
});

app.get('/api/posts/:id', verifyToken, (req, res) => {
  const { id } = req.params;

  const getPostQuery = `
    SELECT * FROM posts WHERE id = $1;
  `;

  pool.query(getPostQuery, [id], (err, result) => {
    if (err) {
      console.error('Error fetching post', err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (result.rows.length === 0) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.status(200).json(result.rows[0]);
    }
  });
});

app.post('/api/posts', verifyToken, (req, res) => {
  const { body } = req.body;

  const insertPostQuery = `
    INSERT INTO posts (body)
    VALUES ($1)
    RETURNING *;
  `;

  pool.query(insertPostQuery, [body], (err, result) => {
    if (err) {
      console.error('Error creating post', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(201).json(result.rows[0]);
    }
  });
});

app.put('/api/posts/:id', verifyToken, (req, res) => {
  const { id } = req.params;
  const { body } = req.body;

  const updatePostQuery = `
    UPDATE posts
    SET body = $1
    WHERE id = $2
    RETURNING *;
  `;

  pool.query(updatePostQuery, [body, id], (err, result) => {
    if (err) {
      console.error('Error updating post', err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (result.rows.length === 0) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.status(200).json(result.rows[0]);
    }
  });
});

app.delete('/api/posts/:id', verifyToken, (req, res) => {
  const { id } = req.params;

  const deletePostQuery = `
    DELETE FROM posts
    WHERE id = $1
    RETURNING *;
  `;

  pool.query(deletePostQuery, [id], (err, result) => {
    if (err) {
      console.error('Error deleting post', err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (result.rows.length === 0) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.status(200).json(result.rows[0]);
    }
  });
});

app.delete('/api/posts', verifyToken, (req, res) => {
  const deleteAllPostsQuery = `
    DELETE FROM posts
    RETURNING *;
  `;

  pool.query(deleteAllPostsQuery, (err, result) => {
    if (err) {
      console.error('Error deleting all posts', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(200).json(result.rows);
    }
  });
});

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
