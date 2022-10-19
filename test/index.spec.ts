import request from 'supertest';
import app from '../src/app';

describe('GET /tasks', () => {
  test('should respond with a 200 sratus code', async () => {
    const response = await request(app).get('/tasks').send();
    expect(response.statusCode).toBe(200);
  });
});
describe('GET /users', () => {
  test('should respond with a array', async () => {
    const response = await request(app).get('/users').send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });
});
describe('POST /users', () => {
  test('should respond with a status code 200', async () => {
    const response = await request(app).post('/users').send();
    expect(response.statusCode).toBe(200);
  });
  test('should have a Content-Type: application/json', async () => {
    const response = await request(app).post('/users').send();
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json'),
    );
  });
  test('should respond with an user Id', async () => {
    const response = await request(app).post('/users').send({
      name: 'Gabriel',
      lastname: 'Berdejo',
    });
    expect(response.body.id).toBeDefined();
  });
});
