// first program in ts

let x = 10;
let y = 20;

console.log(x + y);

// second program in ts

let firstName: string = "Dylan";

let age: number = 30;

let isSingle: boolean = true;

console.log(firstName);

// third program in ts

function myFunc(z: any, a: number): number {
  return z + a;
}

console.log(myFunc(10, 20));

// fourth program in ts

let i: any = 10;

i = "hello";
i = true;

console.log(i);

let vz: null = null;

let xy: undefined = undefined;

console.log(vz);

const arr: string[] = ["hello", "world"];

const arr1: number[] = [10, 20, 30];

const tuple: [number, string] = [10, "hello"];

const tuple1: [number, string, boolean, ...string[]] = [10, "hello", true];

tuple1.push("hello");
tuple1.push("world");

const obj: {
  name: string;
  age: number;
  single: boolean;
  works: {
    company: string;
    position: string;
  };
} = {
  name: "Dylan",
  age: 30,
  single: true,
  works: {
    company: "Google",
    position: "Software Engineer",
  },
};

console.log(obj);

// fifth program in ts

const obj1: {
  name: string;
  age?: number;
  single: boolean;
} = {
  name: "Dylan",
  single: true,
};


obj1.age = 30;



enum Pc{
    mac,
    windows,
    linux
}

console.log(Pc.mac);
