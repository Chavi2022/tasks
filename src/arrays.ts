/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const n = numbers.length;
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [numbers[0], numbers[0]];
    }
    return [numbers[0], numbers[n - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let res: number[] = [];
    for (let i of numbers) {
        res.push(i * 3);
    }
    return res;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let res: number[] = [];
    for (let i of numbers) {
        const parsed = parseInt(i, 10);
        res.push(isNaN(parsed) ? 0 : parsed);
    }
    return res;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let res: number[] = [];
    for (let i of amounts) {
        const value = i.startsWith("$") ? i.slice(1) : i;
        const parsed = parseInt(value, 10);
        res.push(isNaN(parsed) ? 0 : parsed);
    }
    return res;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let res: string[] = [];
    for (let i of messages) {
        if (i.endsWith("!")) {
            res.push(i.toUpperCase());
        } else if (i.endsWith("?")) {
            continue;
        } else {
            res.push(i);
        }
    }
    return res;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count: number = 0;
    for (let i of words) {
        if (i.length < 4) {
            count += 1;
        }
    }
    return count;
}
/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    for (let i of colors) {
        if (i != "red" && i != "blue" && i != "green") {
            return false;
        }
    }
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number = 0;
    let str: string = "";
    if (addends.length == 0) {
        return "0=0";
    }
    for (let i of addends) {
        sum += i;
        str += i + "+";
    }
    str = str.slice(0, -1);
    return sum + "=" + str;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let res: number[] = [];
    let sum: number = 0;
    let foundNegative: boolean = false;
    for (let i of values) {
        if (i < 0 && !foundNegative) {
            res.push(i);
            res.push(sum);
            foundNegative = true;
        } else {
            res.push(i);
            if (!foundNegative) {
                sum += i;
            }
        }
    }
    if (!foundNegative) {
        res.push(sum);
    }
    return res;
}
