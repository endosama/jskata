/**
 * The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array.
 * 
 * Array.map((value, index) => {
 *      let mappedValue = ...
 *      ....
 *      return mappedValue
 * })
 * 
 * 
 * Run:
 * yarn test:map 
 * 
 * to execute this file in watch mode
 */



describe("Test: Map", () => {

    it("1: should return each values increased by 1", () => {
        const params = [0, 1, 2, 3, 4];

        const logic = (arr: number[] /* the array of values */): number[] => {
            /* implements logic */
            /* return the expected value */
            return arr;
        }
        const expected = [1, 2, 3, 4, 5];
        expect(logic(params)).toEqual(expected);
    });

    it("2: should return an array of 0", () => {
        const params = [0, 1, 2, 3, 4];

        const logic = (arr: number[] /* the array of values */): number[] => {
            /* implements logic */
            /* return the expected value */
            return []
        }
        const expected = [0, 0, 0, 0, 0];
        expect(logic(params)).toEqual(expected);
    });

    it("3: should return an array of months (String)", () => {
        const params = [0, 1, 5, 3, 11];
        const numberToMonth = (monthNumber: number): string => (new Date(2009, monthNumber, 1)).toLocaleString("default", { month: "long" })
        const logic = (arr: number[] /* the array of values */): string[] => {
            /* implements logic */
            /* return the expected value */
            return []
        }
        const expected = [
            "January",
            "February",
            "June",
            "April",
            "December"
        ];
        expect(logic(params)).toEqual(expected);
    });


    it("4: should an  with keys and values", () => {
        const params = [0, 1, 5, 3, 11];
        const logic = (arr: number[] /* the array of values */): { key: string, value: string }[] => {
            /* implements logic */
            /* return the expected value */
            return []
        }
        const expected = [
            { key: 0, value: 0 },
            { key: 1, value: 1 },
            { key: 5, value: 2 },
            { key: 3, value: 3 },
            { key: 11, value: 4 }
        ];
        expect(logic(params)).toEqual(expected);
    });

    it("5: should adapt the OldModel values to the new one", () => {

        class OldModel {
            oldBasePrice: number;
            oldBaseCurrency: string;
            oldPrice: number;
            oldCurrency: string;
            oldName: string
        }

        class NewModel {
            newBasePrice: {
                price: number,
                currency: string
            };
            newPrice: {
                price: number,
                currency: string
            };;
            newName: string
        }
        const params: OldModel[] = [{
            oldBaseCurrency: "SHELLS",
            oldBasePrice: 12,
            oldPrice: 15,
            oldCurrency: "SHELLS",
            oldName: "OLD"
        }, {
            oldBaseCurrency: "EUR",
            oldBasePrice: 17,
            oldPrice: 20,
            oldCurrency: "EUR",
            oldName: "NEW"
        }];
        const logic = (arr: OldModel[] /* the array of values */): NewModel[] => {
            /* implements logic */
            /* return the expected value */
            return []
        }
        const expected = [{
            newBasePrice: {
                currency: "SHELLS",
                price: 12,
            },
            newName: "OLD",
            newPrice: {
                currency: "SHELLS",
                price: 15,
            },
        },
        {
            newBasePrice: {
                currency: "EUR",
                price: 17,
            },
            newName: "NEW",
            newPrice: {
                currency: "EUR",
                price: 20,
            },
        }];
        expect(logic(params)).toEqual(expected);
    });
});