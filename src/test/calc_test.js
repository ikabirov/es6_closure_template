import {expect} from 'chai'
import {pow} from './calc.js';

describe("calc test", () => {
	it('should pow', () => {
		expect(pow(2, 3)).equal(8);
	});
});
