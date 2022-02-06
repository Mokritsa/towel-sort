
// You should implement your task here.

module.exports = function towelSort (matrix) {
  newArray = [];
  if(matrix == undefined)
    return newArray;
  matrix.forEach((element, index) => {
    if(index % 2 != 0)
      element.sort((a,b)=>b-a);
    for (let item of element)
      newArray.push(item);
  });
  return newArray;
}
