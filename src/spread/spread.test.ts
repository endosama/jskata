/**
 *
 * not implemented
 *
 */
describe("Spread", () => {
    describe("function arguments", () => {
        it('should return only the last parameter ', () => {
            const params = [0, 1, 2];
            /* Insert the correct arguments */
            const logic = () => {

            }
            const expected = 2;
            expect(logic(params)).toBe(expected);
        });
    });
    describe("Objects", () => {
        it('should add the props of the first object inside the second', () => {
            const param1 = { a: 1, b: 2, c: 3 };
            const param2 = { d: 1, e: 2, f: 3 };
            const concat_objects = (object1: Object, object2: Object): Object => {
                /*insert logic here */
                return {}
            }
            const expected = { a: 1, b: 2, c: 3, d: 1, e: 2, f: 3 };
            expect(concat_objects(param1, param2)).toMatchObject(expected)
        });
    });
    describe("Array", () => {
        it('should add the items of the first array inside the second', () => {
            const param1 = [1, 2, 3];
            const param2 = [4, 5, 6];
            const concat_arrays = (arr1: number[], arr2: number[]): number[] => {
                /*insert logic here */
                return []
            }
            const expected = [1, 2, 3, 4, 5, 6];
            expect(concat_arrays(param1, param2)).toEqual(expected)
        });
    });
});