import { greet } from "../src/index"

describe('greet', () => {
  test('shoud say hello', () => {
    expect(greet('world')).toBe('hello world')
  })
})
