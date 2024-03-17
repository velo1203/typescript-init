// let a = "hello";
// let b: boolean = true; // Type boolean
// let c: number[] = [1, 2, 3]; // Type array of numbers
// let d: string[] = ["hello", "hosung"]; // Type array of strings
// c.push(4); // OK
// // c.push("hello"); // Error
// const player0 = {
//     name: "John",
//     age: 25,
// };
// // player.hello() // Error

// const player2: object = {
//     name: "John",
//     age: 25,
// };

// // player2.name; //Name is not type of object So Error

// const player3: {
//     name: string; //object with name and age
//     age?: number; //age is optional
// } = {
//     name: "John",
//     age: 25,
// };

// //or lets make type plater
// type Name = string;
// type Age = number;
// type Player = {
//     name: Name;
//     age?: Age; //age is optional
// };

// const player4: Player = {
//     //Type "Player" is used
//     name: "John",
//     age: 25,
// };

// function playerMaker(name: string): Player {
//     return {
//         name,
//     };
// }

// const player5 = playerMaker("John");
// player5.age = 25; // age is optional so it's OK

// type Player2 = {
//     readonly name: string; //name is readonly
//     age: number;
// };

// const player6: Player2 = {
//     name: "John",
//     age: 25,
// }; //OK

// // player6.name = "John"; //Error

// const names: readonly string[] = ["John", "Jane"];
// // names.push("Jack"); //Error

// const player: readonly [string, number, boolean] = ["hello", 25, true]; //Tuple
// // player[0] = "world"; //Error

// var anyVar: any = 1;
// anyVar = "hello"; //posible

// let unknownVar: unknown = 1;

// if (unknownVar === 1) {
//     // OK because unknownVar is 1
//     let num: number = unknownVar;
// }

// function voidfunction(): void {
//     //this function returns nothing so void
//     console.log("hello");
// }

// function neverfunction(): never {
//     //this function never returns anything
//     throw new Error("error");
// }

// function variablefunction(a: string | number) {
//     //a can be string or number
//     if (typeof a === "string") {
//         // a is type of string
//     } else if (typeof a === "number") {
//         // a is type of number
//     } else {
//         // a is type of never
//     }
// }

// type Callsigniture = (a: number, b: number) => number; //call signiture
// let add: Callsigniture = (a, b) => a + b;

// type Config = {
//     path: string;
//     state: object;
// };
// type Push = { (path: string): void; (config: Config): void }; //overloading

// const push: Push = (config) => {
//     if (typeof config === "string") {
//         console.log(config);
//     }
//     console.log(config.path);
// };

// type Add = {
//     (a: number, b: number): number;
//     (a: number, b: number, c: number): number;
// };

// const added: Add = (a, b, c?: number) => {
//     if (c) {
//         return a + b + c;
//     }
//     return a + b;
// };

// type SuperPrint = {
//     //Generic type
//     <Generic>(Arr: Generic[]): Generic; //Generic type Array
// };

// const superprint: SuperPrint = (Arr) => Arr[0]; //return first element of array

// superprint([1, 2, 3]);
// superprint([true, false]); //type will be auto created by generic
// superprint(["hello", "world"]);

// abstract class PlayerAbstract {
//     //only can abstract
//     constructor(private firstName: string, protected lastName: string) {}
// }

// class PlayerObj extends PlayerAbstract {
//     getNickName() {
//         this.lastName; //OK
//     }
// } //extends abstract class

// const testPlayer = new PlayerObj("John", "Doe");

// testPlayer.lastName; //Error

// type Words = {
//     [key: string]: string; //key is string and value is string
// };

// class Dict {
//     private words: Words = {};
//     constructor() {
//         this.words = {};
//     }
//     add(word: Word) {
//         if (this.words[word.term] === undefined) {
//             this.words[word.term] = this.words.definition;
//         }
//     }

//     definition(term: string) {
//         return this.words[term];
//     }
// }

// class Word {
//     constructor(public term: string, public definition: string) {}
// }

type Team = "red" | "blue" | "green"; //type of team
type TeamPlayer = {
    nickname: string;
    team: Team;
};
