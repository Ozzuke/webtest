const request = require('supertest');
const app = require('../server'); // Assuming your Express app is exported from server.js

describe('Error Scenarios', () => {
  it('should return error for invalid email format in signup', async () => {
    const response = await request(app)
      .post('/api/auth/signup')
      .send({ email: 'invalid-email', password: 'Password123_' })
      .expect(400);

    expect(response.body.errors[0].msg).toBe('Invalid email address');
  });

  it('should return error for short password in signup', async () => {
    const response = await request(app)
      .post('/api/auth/signup')
      .send({ email: 'testuser@example.com', password: 'short' })
      .expect(400);

    expect(response.body.errors[0].msg).toBe('Password must be at least 8 characters long');
  });

  it('should return error for invalid credentials in login', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'testuser@example.com', password: 'WrongPassword123_' })
      .expect(401);

    expect(response.body.error).toBe('Invalid credentials');
  });

  it('should return error for non-existent post', async () => {
    const response = await request(app)
      .get('/api/posts/9999')
      .set('Authorization', `Bearer ${token}`)
      .expect(404);

    expect(response.body.error).toBe('Post not found');
  });
});
