function find_average(array) {
    let sum = array.reduce((a, b) => a + b);
    //   return (sum / array.length, 2).toFixed(2);
    let result = sum / array.length;
    return result.toFixed(2);
  }
  
  console.log(find_average([43.4, 83.6, 56, 59.47, 70.2, 65, 89, 59]));
  
  module.exports = { find_average };
  