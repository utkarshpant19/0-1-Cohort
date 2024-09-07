type NumString = number | string;
function identity<T>(args: T) {
  return args;
}

const value = identity<string>("Federer");
const value2 = identity<number>(4);
console.log(value.toUpperCase());

// Get First Element from an array

function getFirstElement<T>(args: T[]) {
  return args[0];
}

const firstEl = getFirstElement<string>(["Federer", "Novak"]);
const firstEl2 = getFirstElement<number>([12, 23]);
