const request = require('supertest');
const app = require('../server'); // Assuming your Express app is exported from server.js

describe('CRUD Operations', () => {
  let postId;

  it('should create a new post', async () => {
    const response = await request(app)
      .post('/api/posts')
      .send({ body: 'This is a test post' })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.body).toBe('This is a test post');
    postId = response.body.id;
  });

  it('should fetch all posts', async () => {
    const response = await request(app)
      .get('/api/posts')
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should update a post', async () => {
    const response = await request(app)
      .put(`/api/posts/${postId}`)
      .send({ body: 'This is an updated test post' })
      .expect(200);

    expect(response.body).toHaveProperty('id', postId);
    expect(response.body.body).toBe('This is an updated test post');
  });

  it('should delete a post', async () => {
    const response = await request(app)
      .delete(`/api/posts/${postId}`)
      .expect(200);

    expect(response.body).toHaveProperty('id', postId);
  });
});
