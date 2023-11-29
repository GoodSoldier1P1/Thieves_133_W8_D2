// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: a: number

let b = 'Thieves';
// A: b: string

let c = [true, false, false];
// A: c boolean[]

let d = {age: 30};
// A: d{age: number} = {age: 30}

let e = [3]
// A: e:number[]

let f;
// A: f: any

let g = []
// A: g: never[]    used when you ar sure that something is never going to occur. We set it to nothing so this is infered



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: Need to declare releaseYear or add a question mark after it.

let prices = [100, 200, 300];
prices[0] = '$100;
// A: string not assignable.

function myFunc(a: number, b: number): number {}
// A: It is saying that a number should be returned, but nothing is being returned


// CODEWARS

/*  

KATA:
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

SOLUTION:

function paperwork(n, m) {
  if (n < 0){
    return 0
  } else if (m < 0){
    return 0
  } else {
    return n*m
  }
}



KATA:

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


SOLUTION:

const quarterOf = (month) => {
  if (month <=  3) return 1
  if (month <=  6) return 2
  if (month <=  9) return 3
  return 4
}

*/