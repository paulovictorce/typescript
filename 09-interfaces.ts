interface ObjectValue {
    category: string;
    product?: string;
}



function show({category, product}: {category: string, product: string}) {
    console.log(category);
    console.log(product);
}

function show2({category, product}: ObjectValue) {
    console.log(category);
    console.log(product);
}

show({category: "Categoria", product: "Produto"});


class Product implements ObjectValue {
    category: string;
}

let produto = new Product();
produto.category = 'Teste';

console.log(produto.category)