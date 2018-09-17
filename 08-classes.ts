class Animal {
   // name: string;
    //color: string;
    constructor( public name:string, public color:string){
       // this.name = name;
       // this.color = color; o public deixa implicito que esses são os atributos da classe
    };

}

let myAnimal: Animal = new Animal('Coelho', 'Branco');

console.log(myAnimal.name);

