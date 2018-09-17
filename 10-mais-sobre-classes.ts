interface AnimalInterface {
    name: string;
    color: string;
}

class Animal implements AnimalInterface{
    constructor( public name:string, public color:string){
        //  o public deixa implicito que esses são os atributos da classe
    };

    andar(){}
    correr(){}
    comer(){
        console.log("comer do animal")
    }

}

let myAnimal: Animal = new Animal('Coelho', 'Branco');

console.log(myAnimal.name);

class Coelho extends Animal{
    comer(){
        super .comer();//chamando o comer da classe pai
        console.log("comer do coelho")
    }
}

let coelho = new Coelho('Meu Coelho',"Preto");



console.log(coelho.name);
console.log(coelho.color);