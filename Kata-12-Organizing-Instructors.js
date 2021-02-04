const organizeInstructors = function(instructors) {
  let result = {};
  for (let i = 0; i < instructors.length; i++) {
    let course = instructors[i].course;
    // console.log(course);
    // console.log(result);
    if (course in result) {
      result[course].push(instructors[i].name);
    } else {
      result[course] = [instructors[i].name];
    }
    // console.log(result);
  }
  return result;
};



console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }