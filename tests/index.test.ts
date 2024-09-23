import { add, sub } from '../src'

test('adds two numbers correctly', () => {
    const a = 2
    const b = 3
    const want = 5
    const result = add(a, b)
    expect(result).toBe(want)
})

test('subtracts two numbers correctly', () => {
    const a = 2
    const b = 3
    const want = -1
    const result = sub(a, b)
    expect(result).toBe(want)
})
