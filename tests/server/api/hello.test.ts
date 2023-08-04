import { expect, test, describe } from 'vitest'
import { fetch, setup } from '@nuxt/test-utils'

let status: number
let body: {
  hello: null | 'world';
}

describe('GET /api/hello', async () => {
  await setup({
    server: true
  })

  // Globalize data
  test('Fetch', async () => {
    const res = await fetch('/api/hello')
    body = await res.json()
    status = res.status
  })

  // Check the status
  test('Status 200', () => {
    expect(status).toBe(200)
  })

  // Test the response
  test('Response', () => {
    expect(body.hello).toBe('world')
  })
})
