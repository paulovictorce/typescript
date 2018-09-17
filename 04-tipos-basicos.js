//booleano
var success = true; // forma implicita
var unsuccess = false; //forma explicita
//numeros
var num = 10;
var num1 = 10.50;
var num2 = 0xFA;
//string
var names = 'Oluap';
var nameConcat = 'Teste';
//array
var arrayStrings = ["a", "e"];
var array = ["a", "e"];
var array2 = ["a", "e", 3];
//enum
var estado_civil;
(function (estado_civil) {
    estado_civil[estado_civil["Solteiro"] = 0] = "Solteiro";
    estado_civil[estado_civil["Casado"] = 1] = "Casado";
    estado_civil[estado_civil["Divorciado"] = 2] = "Divorciado";
})(estado_civil || (estado_civil = {}));
;
var meu_estado_civil = estado_civil.Solteiro;
