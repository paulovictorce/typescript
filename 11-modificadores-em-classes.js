var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, color) {
        this.name = name;
        this.color = color;
        //  o public deixa implicito que esses são os atributos da classe
    }
    ;
    Animal.prototype.andar = function () {
    };
    Animal.prototype.correr = function () {
    };
    Animal.prototype.comer = function () {
        console.log("comer do animal");
    };
    return Animal;
}());
var myAnimal = new Animal('Coelho', 'Branco');
console.log(myAnimal.name);
var Coelho = /** @class */ (function (_super) {
    __extends(Coelho, _super);
    function Coelho() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coelho.prototype.comer = function () {
        _super.prototype.comer.call(this); //chamando o comer da classe pai
        console.log("comer do coelho");
    };
    return Coelho;
}(Animal));
var coelho = new Coelho('Meu Coelho', "Preto");
console.log(coelho.name);
console.log(coelho.color);
