const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryaan Holiday'
// };

// const bookJSON = JSON.stringify(book); // JS method that takes in an object, array, or any value and returns the JSON string representation
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON) // Takes in the JSON string and gives us back the object
// console.log(parsedData);

// fs.writeFileSync('1-json.json', bookJSON); // Creates the JSON file and loads in theh data

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title); // Returns the title

// 1. Load and parse the JSON data
const dataBuffer = fs.readFileSync('1-json.json'); 
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

// 2. Change the name and age property using your info
user.name = 'Guther';
user.age = 54;

// 3. Stringify the changed object aan doverwrite the original data
const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);

// 4. Test
// If you run nodde you can see the data haas changed


