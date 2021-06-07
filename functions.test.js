describe('getName', () => {
    test('grabs name', () => {
        const sample = { name: "booger", age: 24 };
        const name = getName(sample);
        expect(name).toEqual("booger");
    });
});