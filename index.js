// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
   const appCats = [...cats, name]
    return appCats;
}

function prependCat(name) {
    const prepCats = [name, ...cats]
    return prepCats
}

function removeLastCat() {
    const remLastCats = cats.slice(0, 2)
    return remLastCats
}
function removeFirstCat() {
    const remFirstCats = cats.slice(1)
    return remFirstCats
}