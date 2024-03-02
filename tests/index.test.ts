import { add, sub } from '../src'

test('adds two numbers correctly', () => {
    const result = add(2, 3)
    expect(result).toBe(5)
})

test('subtracts two numbers correctly', () => {
    const result = sub(2, 3)
    expect(result).toBe(-1)
})
