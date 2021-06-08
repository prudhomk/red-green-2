import getName from './functions.js';
import { copyPush, capitalizeAndFilter, fetchQuotes } from './functions.js';

describe('getName', () => {
    test('grabs name', () => {
        const sample = { name: "booger", age: 24 };
        const name = getName(sample);
        expect(name).toEqual("booger");
    });
});

describe('copyPush', () => {
    test('copies an array and pushes new values into it', () => {
     
        const sample = [1, 2, 3];
        const newArray = copyPush(sample, 4);
        expect(newArray).toEqual([sample, [1, 2, 3, 4]]);
        
    });
});


describe('capitalizeAndFilter', () => {
    test.only('capitalizes a string of letters in an array and filters out strings beginning with F/f', () => {
        const sample = ['fred says hello', 'boogers', 'Fart in your general direction'];
        const magicArray = capitalizeAndFilter(sample);
        expect(magicArray).toEqual(['BOOGERS']);
    });
});

describe('fetchQuotes', () => {
    test('returns a single quote from an API', () => {
        const quote = fetchQuotes();
        expect(quote).toEqual(expect.arrayContaining([]))
    });
});