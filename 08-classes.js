var Animal = /** @class */ (function () {
    // name: string;
    //color: string;
    function Animal(name, color) {
        this.name = name;
        this.color = color;
        // this.name = name;
        // this.color = color; o public deixa implicito que esses são os atributos da classe
    }
    ;
    return Animal;
}());
var myAnimal = new Animal('Coelho', 'Branco');
console.log(myAnimal.name);
