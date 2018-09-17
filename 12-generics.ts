let myArray: Array<number> = []; //toda posição do array será um número

function funcao<T>(param: T): T {
    return param;
}

let variable: number = funcao<number>(2);

class Lista<T> {
    items = [];

    add(item:T) {

    }

    remove(item:T) {

    }
}

let lista = new Lista<number>();