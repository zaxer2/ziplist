function zipList(array1, array2) {
  const arrayFinal = [];
  for (let i = 0; i < array1.length; i++) {
    arrayFinal[2 * i] = array1[i];
    arrayFinal[2 * i + 1] = array2[i];
  }
  return arrayFinal;
}
function zipListTheSimpleWay(array1, array2) {
  return _.flatten(_.zip(array1, array2));
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
