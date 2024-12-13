const request = require('supertest');
const app = require('../server'); // Assuming your Express app is exported from server.js

describe('Authentication Flow', () => {
  let token;

  it('should sign up a new user', async () => {
    const response = await request(app)
      .post('/api/auth/signup')
      .send({ email: 'testuser@example.com', password: 'Password123_' })
      .expect(201);

    expect(response.body).toHaveProperty('token');
    token = response.body.token;
  });

  it('should log in an existing user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'testuser@example.com', password: 'Password123_' })
      .expect(200);

    expect(response.body).toHaveProperty('token');
    token = response.body.token;
  });

  it('should verify the token', async () => {
    const response = await request(app)
      .get('/api/posts')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });
});
