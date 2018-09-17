const soma = function (x: number, y: number) {
    return x+y;
};

soma(3,12);

const soma2 = function (x: number, y: number): number {
    return x+y;
};

let number: number = soma(3,5);

const adicao = (x: number , y: number): number => {
    return x + y;
}

const shortAdicao = (x: number , y: number): number =>  x + y;

//em caso de logicas complexas e longa, use as chaves


let functionOptionalParameters = (first_name:string, last_name?:string) => {

}

//? define o parâmetro não obrigatório. 