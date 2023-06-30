// function countWords(str){
//     const words = str.split(" ")
//     const map = new Map();
//     for(let word of words){
//         if(map.has(word)){
//             map.set(word, map.get(word) +1);
//         }
//         else{
//             map.set(word,1);
//         }
//     }
//     return map;
// }
// const sentence = "i am badal, i am learning web develement from pw skills";
// console.log(countWords(sentence))
//No2

// function uniqueElement(arr) {
//     return new Set(arr);
//   }
  
//   console.log(uniqueElement([1, 2, 2, 3, 3, 4])); 
//   console.log(uniqueElement([5, 6, 7, 7, 8, 8])); 

//no3

// function swap(a, b) {
//     [a, b] = [b, a];
//     return [a, b];
//   }
  
//   let x = 1;
//   let y = 2;
//   [x, y] = swap(x, y);
//   console.log(x, y);
  

// no 4
// function extract(arr) {
//     const [first, second, , , , last] = arr;
//     return [first, second, last];
//   }
  
//   const array = [1, 2, 3, 4, 5, 6];
//   console.log(extract(array));
  
//no5

// function maxMin(arr) {
//     return {
//       max: Math.max(...arr),
//       min: Math.min(...arr),
//     };
//   }
  
//   const array = [3, 7, 2, 9, 4, 1];
//   console.log(maxMin(array));

//no6
const person = {
    name: "Mithun",
    age: 21,
    address: {
      street: "B8, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh",
    },
  };
  
  function extractData(obj) {
    const {
      name,
      address: { street },
    } = obj;
    return { name, street };
  }
  
  console.log(extractData(person));
  
  
  