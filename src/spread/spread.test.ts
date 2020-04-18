/**
 * Useful links: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax]
 * Spread operator allows an iterable to expand in places where 0+ arguments are expected. 
 * It is mostly used in variable array where there is more than 1 values are expected.
 * It allows us the privilege to obtain a list of parameters from an array.
 *
 * (...) <- syntax
 */
type SpreadableFunction = (...args: any) => any;
describe("Spread", () => {
    describe("function arguments", () => {
        it("1. should return only the last parameter", () => {
            const params = [0, 1, 2];

            /* Insert the correct arguments */
            const logic: SpreadableFunction = () => {
                /* return the correct argument here */
                return -1;
            }
            const expected = 2;
            expect(logic(...params)).toBe(expected);
        });
        it("2. should call the sum function with the correct amount of properties using the spread operator", () => {
            const params = [1, 10, 100];

            const sum: SpreadableFunction = (a: number, b: number, c: number): number => a + b + c;
            /* Insert the correct arguments */
            const logic = (arr: number[]): number => {
                /* call the sum function using the spread operator and return the result */
                return 0;
            }
            const expected = 111;
            expect(logic(params)).toBe(expected);
        });


    });
    describe("Objects", () => {
        it("3. should add the props of the first object inside the second", () => {
            const param1 = { a: 1, b: 2, c: 3 };
            const param2 = { d: 1, e: 2, f: 3 };
            const concat_objects = (object1, object2): Object => {
                /*insert logic here and change the return statement*/
                return {}
            }
            const expected = { a: 1, b: 2, c: 3, d: 1, e: 2, f: 3 };
            expect(concat_objects(param1, param2)).toMatchObject(expected)
        });

        it("4. should add to obj1 all the props of obj2 that are not already in obj1", () => {
            const obj1 = { a: 1, b: 2, c: 3 };
            const obj2 = { b: 10, c: 20, d: 30 };
            const add_new_props = (object1, object2): Object => {
                /*insert logic here and change the return statement*/
                return {}
            }
            const expected = { a: 1, b: 2, c: 3, d: 30 };
            expect(add_new_props(obj1, obj2)).toMatchObject(expected)
        });

        it("5. should replace the amount of the sub-prop 'price' inside of obj1 with the value in obj2", () => {
            const obj1 = {
                rental: {
                    price: {
                        amount: 2
                    },
                    insurance: {
                        code: 7
                    }
                }
            };
            const obj2 = {
                rental: {
                    price: {
                        amount: 480
                    },
                }
            }
            const add_new_props = (object1, object2): Object => {
                /*insert logic here and change the return statement*/
                return {}
            }
            const expected = {
                rental: {
                    price: {
                        amount: 480
                    },
                    insurance: {
                        code: 7
                    }
                }
            };;
            expect(add_new_props(obj1, obj2)).toMatchObject(expected)
        });
    });
    describe("Array", () => {
        it("6. should add the items of the first array inside the second", () => {
            const param1 = [1, 2, 3];
            const param2 = [4, 5, 6];
            const concat_arrays = (arr1: number[], arr2: number[]): number[] => {
                /*insert logic here and change the return statement*/
                return []
            }
            const expected = [1, 2, 3, 4, 5, 6];
            expect(concat_arrays(param1, param2)).toEqual(expected)
        });

        it("7. should add the items of the first array inside the middle of the second", () => {
            const param1 = [1, 2, 3];
            const param2 = [100, 200];
            const concat_arrays = (arr1: number[], arr2: number[]): number[] => {
                /*insert logic here and change the return statement*/
                return []
            }
            const expected = [100, 1, 2, 3, 200];
            expect(concat_arrays(param1, param2)).toEqual(expected)
        });
    });
});