//sample1
var names = ['john', 'peter', 'michael']
for (var name of names) {
  console.log(name)
}


//sample2
var students = [
  {name: 'john', age: 16},
  {name: 'peter', age: 23},
  {name: 'michael', age: 25}
];

var adults = students.filter(function(student) {
  return student.age > 18;
});
console.log(adults);

//sample3
var students = [
  {name: 'john', age: 16},
  {name: 'peter', age: 23},
  {name: 'michael', age: 25}
];

var adults = [ for (s of students) if (s.age > 18)];
console.log(adults);