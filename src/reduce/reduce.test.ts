/**
 * The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 * 
 * Array.reduce((accumulator, value, index) => {
 *      ...
 *      ....
 *      accumulator.push(value)
 *      return accumulator
 * }, accumulator_initial_value)
 */



describe("Test: Reduce", () => {

    describe("Array", () => {
        it("1: should return each values increased by 1", () => {
            const params = [0, 1, 2, 3, 4];

            const increase = (arr: number[] /* the array of values */): number[] => {
                /* implements logic */
                /* return the expected value */
                return arr;
            }
            const expected = [1, 2, 3, 4, 5];
            expect(increase(params)).toEqual(expected);
        });

        it("2: should return the sum of the values inside the array", () => {
            const params = [0, 1, 2, 3, 4];

            const sum = (arr: number[] /* the array of values */): number => {
                /* implements logic */
                /* return the expected value */
                return 0;
            }
            const expected = 15;
            expect(sum(params)).toEqual(expected);
        });

        it("3: should concat the values inside the array as strings", () => {
            const params = ["0", "1", "5", "3", "11"];
            const logic = (arr: string[] /* the array of values */): string[] => {
                /* implements logic */
                /* return the expected value */
                return []
            }
            const expected = "015311";
            expect(logic(params)).toEqual(expected);
        });


        it("4: should an object with keys and values", () => {
            const params = [{ value: 1 }, { value: 2 }, { value: 4 }, { value: 8 }, { value: 16 }, { value: 32 }];
            const logic = (arr: any[] /* the array of values */): { newValue: number }[] => {
                /* implements logic */
                /* return the expected value */
                return []
            }
            const expected = [
                { newValue: 1 },
                { newValue: 4 },
                { newValue: 16 },
                { newValue: 64 },
                { newValue: 256 },
                { newValue: 1024 }
            ];
            expect(logic(params)).toEqual(expected);
        });

        it("5: should return each values multiplied by itself", () => {
            const params = [
                1,
                2,
                3
            ];

            const multiply = (arr: number[]): { [key: string]: number } => {
                /* implements logic */
                /* return the expected value */
                return {};
            }
            const expected = {
                "1": 1,
                "2": 4,
                "3": 9
            };
            expect(multiply(params)).toEqual(expected);
        });

        it("6: should return the sum of the values inside the array", () => {
            const params = [0, 1, 2, 3, 4];

            const sum = (arr: number[] /* the array of values */): number => {
                /* implements logic */
                /* return the expected value */
                return 0;
            }
            const expected = 15;
            expect(sum(params)).toEqual(expected);
        });

        it("7: should concat the values inside the array as strings", () => {
            const params = ["0", "1", "5", "3", "11"];
            const logic = (arr: string[] /* the array of values */): string[] => {
                /* implements logic */
                /* return the expected value */
                return []
            }
            const expected = "015311";
            expect(logic(params)).toEqual(expected);
        });
    });
});