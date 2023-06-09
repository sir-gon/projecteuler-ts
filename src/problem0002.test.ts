/**
 * Even Fibonacci numbers
 *
 * https://projecteuler.net/problem=2
 *
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms.
 * By starting with 1 and 2, the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million,
 * find the sum of the even-valued terms.
 */

import logger from './logger';

import { problem0002 } from './problem0002';

describe('problem 0002', () => {
  it('problem 0002 solution found', () => {
    expect.assertions(1);

    const solutionFound = 4613732;
    const top = 4000000;

    const calculated = problem0002(top);

    logger.info(`PROBLEM 0002 solution found: ${calculated}`);

    expect(calculated).toBe(solutionFound);
  });
});
