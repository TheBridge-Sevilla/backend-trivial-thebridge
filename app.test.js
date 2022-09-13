const app = require('./server')
const supertest = require('supertest')
const request = supertest(app)

describe('/preguntas', () => {
  it('should return a response', async () => {
    const response = await request.get('/preguntas')
    expect(response.status).toBe(200)
  })
})

describe('/categorias', () => {
  it('should return a response', async () => {
    const response = await request.get('/categorias')
    expect(response.status).toBe(200)
  })
})

describe('/partidas', () => {
  it('should return a response', async () => {
    const response = await request.get('/partidas')
    expect(response.status).toBe(200)
  })
})
