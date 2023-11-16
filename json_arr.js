


function createJsonArray(size) {
    const jsonArray = [];
  
    for (let i = 1; i <= size; i++) {
      const person = {
        id: i,
        name: `Person${i}`,
        age: Math.floor(Math.random() * 50) + 20,
        isStudent: i % 2 === 0,
        courses: ["Math", "English"].sort(() => Math.random() - 0.5).slice(0, 2)
      };
      jsonArray.push(person);
    }
  
    return jsonArray;
  }
  
  
  function iterateJsonArray(jsonArray) {
    jsonArray.forEach((person, index) => {
      console.log(`Person ${index + 1}:`);
      console.log(`ID: ${person.id}`);
      console.log(`Name: ${person.name}`);
      console.log(`Age: ${person.age}`);
      console.log(`Is Student: ${person.isStudent}`);
      console.log(`Courses: ${person.courses.join(", ")}`);
      console.log("\n");
    });
  }
  
  
  const jsonArraySize = 5; 
  const jsonArray = createJsonArray(jsonArraySize);
  
  console.log("JSON Array:");
  iterateJsonArray(jsonArray);
  