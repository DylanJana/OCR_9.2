import { data } from '../../../data/mock-homepage-data.js';
import {retrieveSensorsData } from './sensorsApi.js';

describe('sensorsApi UNit Test Suites', () => {
    it('should return the mocked data', () => {
        expect(retrieveSensorsData()).toBe(data.facades)
    })
})