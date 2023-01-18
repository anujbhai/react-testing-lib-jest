const request = require('supertest');
const app = require('./app');

describe('Todos', () => {
  it('should return an array of todos', () => {
    return request(app).get('/todos')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              completed: expect.any(Boolean),
            }),
          ])
        );
      });
  });

  it('should return specific todo by id', () => {
    return request(app).get('/todos/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(res => {
        expect(res.body).toEqual({
          id: expect.any(Number),
          name: expect.any(String),
          completed: expect.any(Boolean),
        });
      });
  });

  it('should return 404 not found', () => {
    return request(app).get('/todos/999').expect(404);
  });

  it('should create a new todo', async () => {
    return request(app)
      .post('/todos')
      .send({
        name: 'do dishes'
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then(res => {
        expect(res.body).toEqual(
          expect.objectContaining({
            name: 'do dishes',
            completed: false
          })
        );
      });
  });

  it('should validate request body', () => {
    return request(app).post('/todos').send({name: 123}).expect(422);
  });
});


