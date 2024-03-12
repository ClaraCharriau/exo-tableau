const numbers = [5, 6, 34, 56, 12, 4, 6, 8, 230, 1];

const getHighestNumber = (numbersArray) => {
  return Math.max(...numbersArray);
};

console.log("The numbers array : " + numbers);
console.log("The highest number is... " + getHighestNumber(numbers));
