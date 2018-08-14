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

// this is not correct! work on it!
function appendKitten (kittensString) {
  kittens === kittens("Broom");
  return kittens;
}ß
