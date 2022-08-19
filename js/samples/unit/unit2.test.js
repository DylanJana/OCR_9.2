import { getAge } from "./unit2.js";

describe('getAge Unit Test Suites', () => {
    it('should rendeer "Vous avez actuellement 31 ans', () => {
        expect(getAge(31)).toBe('Vous avez actuellement 31 ans')
    })
})
})
import { getAge } from './unit2'


describe('getAge Unit Test Suites', () => {
    it('should render "Vous avez actuellement 31 ans"', () => {
        expect(getAge(31)).toBe("Vous avez actuellement 31 ans")
    })
})
