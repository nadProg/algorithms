import {testFunction} from "./testFunction";

test('should test testFunction', () => {
    expect(testFunction()).toBe('test');
});