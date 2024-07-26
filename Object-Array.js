let person = {
    name: "John",
    age: 30,
    hobbies: ["reading", "gaming", "coding"]
  };
  
  let people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 35 }
  ];
  
  function filterByAge(people, age) {
    return people.filter(person => person.age > age).map(person => person.name);
  }
  
  console.log(filterByAge(people, 28));