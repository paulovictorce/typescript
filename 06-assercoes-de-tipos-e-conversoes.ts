let meu_nome: any = "Paulo Oliveira";

let caracteres: number = (<string>meu_nome).length;
let caracteres2: number = (meu_nome as string).length

let obj = {
    name: "PV"
};

(<any>obj).texto = "School";

(obj as any).texto2 = "School2";

console.log(obj);

let striNum = "123456";

let num2 = +striNum //convertendo a string que contém número em número