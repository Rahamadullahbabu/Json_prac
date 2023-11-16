
function createJsonObject(name, age, isStudent, courses) {
    return {
      name: name,
      age: age,
      isStudent: isStudent,
      courses: courses
    };
  }
  
 
  function convertToJsonString(jsonObject) {
    return JSON.stringify(jsonObject);
  }
  
  
  function parseJsonString(jsonString) {
    return JSON.parse(jsonString);
  }
  
 
  function createJsonArray() {
    return [
      { name: "Alice", age: 28, isStudent: false, courses: ["History", "Art"] },
      { name: "Bob", age: 22, isStudent: true, courses: ["Math", "Computer Science"] },
      { name: "Charlie", age: 25, isStudent: false, courses: ["Physics", "Chemistry"] }
    ];
  }
  
  function iterateJsonArray(jsonArray) {
    jsonArray.forEach((person, index) => {
      console.log(`Person ${index + 1}:`);
      console.log(`Name: ${person.name}`);
      console.log(`Age: ${person.age}`);
      console.log(`Is Student: ${person.isStudent}`);
      console.log(`Courses: ${person.courses.join(", ")}`);
      console.log("\n");
    });
  }
  
  
  const person1 = createJsonObject("John Doe", 30, false, ["Math", "English"]);
  const jsonString = convertToJsonString(person1);
  console.log("JSON String:", jsonString);
  
  const parsedObject = parseJsonString(jsonString);
  console.log("Parsed Object:", parsedObject);
  
  const jsonArray = createJsonArray();
  console.log("\nJSON Array:");
  iterateJsonArray(jsonArray);