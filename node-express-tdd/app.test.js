const request = require('supertest');
const app = require('./app');

describe('Todos', () => {
  it('should return an array of todos', () => {
    const todoArr = request(app).get('./todos');

    return todoArr
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
              completed: expect.any(Boolean),
            }),
          ])
        )
      });
  });

  it('should return specific todo by id', () => {
    const todoArr = request(app).get('./todos/1');

    return todoArr
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual({
          name: expect.any(String),
          completed: expect.any(Boolean),
        })
      });
  });

  it('should return 404 not found', () => {
    return request(app).get('/todos/999').expect(404);
  });

  it('should create a new todo', () => {
    const todoItem = request(app).post('/todos');

    return todoItem.send()
  });

  it('should validate request body', () => {});
});

