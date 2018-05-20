const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
   kittens.push(name)
   return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function removeLastKitten(name) {
  return kittens.slice(0,name.lenght-1)
}
