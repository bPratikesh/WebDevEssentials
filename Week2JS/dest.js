var obj = {
  id: 1,
  Name: "Pratikesh",
  age: "24",
};
// Object destruction
console.log(obj.Name);
var { id, Name, age } = obj;
console.log(id, Name);

// Array destruction
var even = [2, 4, 6, 8];
var [a, b, c, d] = even;
console.log(a, d);
