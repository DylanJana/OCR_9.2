import { isInTestEnv } from './index.js';

describe('Call isInTestEnv in test environment', () => {
    it('should be in test env', () => {
        expect(isInTestEnv()).toBe(true)
    })

    it('should not be in test env', () => {
        process.env.NODE_ENV = 'dev'
        expect(isInTestEnv()).toBe(false)
    })
})