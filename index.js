// kittens string
 var kittens = ["Milo", "Otis", "Garfield"];
 
function destructivelyAppendKitten (kittensString) {
  kittens.push(kittensString);
    return kittens;
}

function destructivelyPrependKitten (kittensString) {
  kittens.unshift(kittensString);
    return kittens;
}

function destructivelyRemoveLastKitten (kittensString) {
  kittens.pop(kittensString);
    return kittens;
}

function destructivelyRemoveFirstKitten (kittensString) {
  kittens.shift(kittensString);
    return kittens;
}

function appendKitten (kittensString) {
  kittens.slice(kittensString);
    return kittens;
}