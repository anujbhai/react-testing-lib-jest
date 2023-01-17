const request = require('supertest');
const app = require('./app');

describe('Todos', () => {
  it('should return an array of todos', async () => {
    const res = await request(app).get('./todos')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          completed: expect.any(Boolean),
        }),
      ]));
  });

  it('should return specific todo by id', async () => {
    const todoArr = request(app).get('./todos/1');

    const res = await todoArr
      .expect('Content-Type', /json/)
      .expect(200);
    expect(res.body).toEqual({
      name: expect.any(String),
      completed: expect.any(Boolean),
    });
  });

  it('should return 404 not found', () => {
    return request(app).get('/todos/999').expect(404);
  });

  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({
        name: 'do dishes'
      })
      .expect('Content-Type', '/json/')
      .expect(201);
    expect(res.body).toEqual(
      expect.objectContaining({
        name: 'do dishes',
        completed: false
      })
    );
  });

  it('should validate request body', () => {
    return request(app).post('/todos').send({name: 123}).expect(422);
  });
});

