function createJsonObject(id, name, age, isStudent, courses) {
    return {
      id: id,
      name: name,
      age: age,
      isStudent: isStudent,
      courses: courses
    };
  }
  
  
  function convertToJsonString(jsonObject) {
    return JSON.stringify(jsonObject, null, 2);  }
  
 
  function parseJsonString(jsonString) {
    return JSON.parse(jsonString);
  }
  
  
  const sampleObject = createJsonObject(101, "John Doe", 30, false, ["History", "Art"]);
  const jsonStringObject = convertToJsonString(sampleObject);
  
  console.log("JSON Object String:");
  console.log(jsonStringObject);
  
  const parsedObject = parseJsonString(jsonStringObject);
  console.log("\nParsed Object:");
  console.log(parsedObject);
  
  