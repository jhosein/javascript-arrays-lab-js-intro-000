const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {

  var newKittens = kittens.push(name);
  return newKittens;
}
