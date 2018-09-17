function showWithVar() {
    var text = "paulo oliveira";
    if (true) {
        var text = 'texto';
    }

    console.log(text);
}

showWithVar();

function showWithLet() {
    let text = "paulo oliveira";
    if (true) {
        let text = 'texto';
    }

    console.log(text);
}

showWithLet();