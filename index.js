// kittens string
 var kittens = ["Milo", "Otis", "Garfield"];
 var kittens2 = kittens.concat('Broom');
 var kittens3 = kittens.unshift('Arnold');
 
function destructivelyAppendKitten (kittensString) {
  kittens.push(kittensString);
    return kittens;
}

function destructivelyPrependKitten (kittensString) {
  kittens.unshift(kittensString);
    return kittens3;
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
  return kittens2;
}

/// not correct, work on it!
function prependKitten (kittensString) {
  return kittens3;
}