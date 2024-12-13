const request = require('supertest');
const app = require('../server'); // Assuming your Express app is exported from server.js

describe('Protected Routes', () => {
  let token;

  beforeAll(async () => {
    const response = await request(app)
      .post('/api/auth/signup')
      .send({ email: 'testuser@example.com', password: 'Password123_' })
      .expect(201);

    token = response.body.token;
  });

  it('should not allow access to GET /api/posts without token', async () => {
    await request(app)
      .get('/api/posts')
      .expect(403);
  });

  it('should allow access to GET /api/posts with valid token', async () => {
    const response = await request(app)
      .get('/api/posts')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

  it('should not allow access to POST /api/posts without token', async () => {
    await request(app)
      .post('/api/posts')
      .send({ body: 'This is a test post' })
      .expect(403);
  });

  it('should allow access to POST /api/posts with valid token', async () => {
    const response = await request(app)
      .post('/api/posts')
      .set('Authorization', `Bearer ${token}`)
      .send({ body: 'This is a test post' })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.body).toBe('This is a test post');
  });
});
