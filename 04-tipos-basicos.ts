//booleano
let success = true; // forma implicita

let unsuccess:boolean = false; //forma explicita

//numeros
let num = 10;
let num1 = 10.50;
let num2:number = 0xFA;

//string
let names: string = 'Oluap';
let nameConcat = 'Teste';

//array
let arrayStrings: string[] = ["a", "e"];

let array: Array<string> = ["a", "e"];

let array2: Array<any> = ["a", "e", 3];
//enum

enum  estado_civil {
    Solteiro, Casado, Divorciado
};

let meu_estado_civil: estado_civil = estado_civil.Solteiro;