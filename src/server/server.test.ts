import { addNumbers } from "./server";
import { expect, test } from "@jest/globals";

const testArr1 = [1, 2, 3, 4, 5];
const result1 = 15;

const testArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result2 = 45;

const testArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result3 = 55;

const testArr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -6];
const result4 = 49;

test("addNumbers should return the sum of all numbers in an array", () => {
    expect(addNumbers(testArr1)).toBe(result1);
    expect(addNumbers(testArr2)).toBe(result2);
    expect(addNumbers(testArr3)).toBe(result3);
    expect(addNumbers(testArr4)).toBe(result4);
});