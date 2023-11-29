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