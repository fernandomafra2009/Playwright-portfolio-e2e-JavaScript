const { randomUUID } = require('node:crypto')
const { test, expect } = require('@playwright/test')

test.describe('ServeRest API', () => {
  test.use({ baseURL: 'https://serverest.dev' })

  test('creates a user', async ({ request }) => {
    const user = {
      nome: 'Playwright API User',
      email: `playwright_${randomUUID()}@teste.com`,
      password: 'Teste@123',
      administrador: 'true',
    }

    const response = await request.post('/usuarios', { data: user })
    const body = await response.json()

    expect(response.status()).toBe(201)
    expect(body.message).toBe('Cadastro realizado com sucesso')
    expect(body._id).toEqual(expect.any(String))
    expect(body._id).not.toBe('')
  })

  test('authenticates a valid user', async ({ request }) => {
    const user = {
      nome: 'Playwright API Login User',
      email: `playwright_login_${randomUUID()}@teste.com`,
      password: 'Teste@123',
      administrador: 'true',
    }

    const createResponse = await request.post('/usuarios', { data: user })
    expect(createResponse.status()).toBe(201)

    const response = await request.post('/login', {
      data: {
        email: user.email,
        password: user.password,
      },
    })
    const body = await response.json()

    expect(response.status()).toBe(200)
    expect(body.message).toBe('Login realizado com sucesso')
    expect(body.authorization).toEqual(expect.any(String))
    expect(body.authorization).not.toBe('')
  })

  test('retrieves the product list', async ({ request }) => {
    const response = await request.get('/produtos')
    const body = await response.json()

    expect(response.status()).toBe(200)
    expect(body.quantidade).toEqual(expect.any(Number))
    expect(body.produtos).toEqual(expect.any(Array))
    expect(body.produtos.length).toBeGreaterThan(0)
  })
})
