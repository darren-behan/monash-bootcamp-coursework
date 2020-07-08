// Write a function that takes in an array of integers and the array with duplicates removed

const integersArray = [1, 2, 2, 3];

// integersArray.filter((x, index) => console.log(integersArray.indexOf(x) !== index));

integersArray.reduce((unique, item) => {
  console.log(
    unique.includes(item) ? unique : [...unique, item],
    );

    return unique.includes(item) ? unique : [...unique, item];
}, []);
