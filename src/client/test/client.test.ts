import { test, expect } from "@jest/globals";
import { multiplyByTwo, divideByThree, sliceString } from "../client";

// Test numbers and results for multiplyByTwo
const testNum1 = 1;
const resultNum1 = 2;

const testNum2 = 2;
const resultNum2 = 4;

const testNum3 = 3;
const resultNum3 = 6;

const testNum4 = 0;
const resultNum4 = 0;

// Test numbers and results for diviceByThree
const testNum5 = 3;
const resultNum5 = 1;

const testNum6 = 6;
const resultNum6 = 2;

const testNum7 = -9;
const resultNum7 = -3;

const testNum8 = 0;
const resultNum8 = 0;

// Test strings and results for sliceString
const testStr1 = "Hello World!";
const resultStr1 = "Hello";

const testStr2 = "Hello";
const resultStr2 = "Hello";

const testStr3 = "Hello World! How are you?";
const resultStr3 = "Hello";

test("multiplyByTwo should return the number multiplied by 2", () => {
    expect(multiplyByTwo(testNum1)).toBe(resultNum1);
    expect(multiplyByTwo(testNum2)).toBe(resultNum2);
    expect(multiplyByTwo(testNum3)).toBe(resultNum3);
    expect(multiplyByTwo(testNum4)).toBe(resultNum4);
});

test("divideByThree should return the number divided by 3", () => {
    expect(divideByThree(testNum5)).toBe(resultNum5);
    expect(divideByThree(testNum6)).toBe(resultNum6);
    expect(divideByThree(testNum7)).toBe(resultNum7);
    expect(divideByThree(testNum8)).toBe(resultNum8);
});

test("sliceString should return the first 5 characters of the string", () => {
    expect(sliceString(testStr1)).toBe(resultStr1);
    expect(sliceString(testStr2)).toBe(resultStr2);
    expect(sliceString(testStr3)).toBe(resultStr3);
});