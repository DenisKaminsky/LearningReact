// Primitives
let age: number = 2.4;
let userName: string = 'denis';
let isAdmin: boolean = true;

// Complex types: arrays, objects
let hobbies: string[] = ['football', 'baseball', 'hockey'];

type Person = {
    age: number,
    name: string,
    hobbies: string[]
};

let person: Person
person = {
    age: 1,
    name: "Denis",
    hobbies: hobbies
}
let people: Person[];
people = [person];

// Type inference
let course = 'React - Guide';
//course = 12345;

// Multiple types
let multiType: number | string;
multiType = '123';
multiType = 123;

// Functions & types
function add(a: number, b: number): number {
    return a + b;
}


// Generics
function insertAtBeginning<T>(array: T[], newItem: T) {
    const newArray = [newItem, ...array];
    return newArray;
}

const newArr1 = insertAtBeginning([2,3,4], 1);
const newArr2 = insertAtBeginning(['2','3','4'], '1');