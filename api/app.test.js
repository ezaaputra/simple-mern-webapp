const supertest = require('supertest')
const app = require('./app')
const request = supertest(app)

describe('GET /', () => {
  test('Should return 200 statuscode', async () => {
    const res = await request.get('/')
    expect(res.status).toBe(200)
  })
  test('Should return proper description', async () => {
    const res = await request.get('/')
    expect(res.text).toBe('run!')
  })
})

describe('GET /products', () => {
  test('Should return 200 statuscode', async () => {
    const res = await request.get('/products')
    expect(res.status).toBe(200)
  })
})

describe('POST /products', () => {
  test('Should return 500 statuscode if there is no data to insert', async () => {
    const testData = {}
    const res = await request.post('/products').send(testData)
    expect(res.status).toBe(500)
  })
})

describe('DELETE /products/:productId', () => {
  test('Should return 500 statuscode if params unknown', async () => {
    const res = await request.delete('/products/example')
    expect(res.status).toBe(500)
  })
})