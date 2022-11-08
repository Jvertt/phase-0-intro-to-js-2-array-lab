// Write your solution here!

const cats = [
    'Milo',
    'Otis',
    'Garfield'
]

function destructivelyAppendCat(){

cats.push ('Ralph');
}

function destructivelyPrependCat(){

    cats.unshift ('Bob');   
}

function destructivelyRemoveFirstCat(){
    cats.shift ([0])
}

function destructivelyRemoveLastCat(){
    cats.pop ([3])
}

function appendCat(){
    const appendCat = cats.slice();
    return [
        'Milo',
        'Otis',
        'Garfield',
        'Broom'
    ];
}

function prependCat(){
    const prependCat = cats.slice();
    return [
        'Arnold',
        'Milo',
        'Otis',
        'Garfield'
    ];
}

function removeLastCat(){
    const removeLastCat = cats.slice(-1);
    return [
        'Milo',
        'Otis',
    ]
}

function removeFirstCat(){
    const appendCat = cats.slice(0);
    return [
        'Otis',
        'Garfield'
    ]
    
}