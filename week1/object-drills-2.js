// Make student reports

function makeStudentsReport(data) {
  let result = [];

  data.forEach(
    function(object) {
      result.push(`${object.name}: ${object.grade}`);
    }
  );

  return result
}

// Enroll in summer school

var studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science'
  }
];

function enrollInSummerSchool(students) {
    return students.map(
      function(student) {
        return {
      name: student.name,
      status: "In Summer school",
      course: student.course
        }

      });
}

// Find by id

function findById(items, idNum) {
  let result;

  items.forEach(
    function(item) {
      if (idNum === item.id) {
        result = item;
      }
    }
  );

  return result;
}

function findById(items, idNum) {
  for (let i=0; i<items.length; i++) {
    if (idNum === items[i].id) {
      return items[i];
    }
  }
}

// Validate Object Keys

var objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
}

var objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
}

var expectedKeys = [
  'id', 'name', 'age', 'city'
];

function validateKeys(object, expectedKeys) {
  const objectKeys = Object.keys(object);

  for (let i=0; i < expectedKeys.length; i++) {
    if (expectedKeys[i] !== objectKeys[i]){
      return false
    }
  }

  return true
}

function validateKeys(object, expectedKeys) {

  // if there's not the same number of object keys
  // and expected keys, then we know there are missing or
  // extra keys, so return false
  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }

  // we iterate over each expected key and verify that
  // it's found in `object`.
  for (var i; i<expectedKeys.length; i++) {
    if (!Object.keys(object).find(function(key) {
      return key === expectedKeys[i];
    })) {
      return false;
    }
  }
  // if we get to this point in our code, the keys are valid
  // so we return `true`
  return true;
}

// Todo list factory

function makeToDos(owner, toDos) {
  const ownerToDos = {
    owner: owner,
    toDos: toDos,
    generateHtml: function() {
      let result;

      toDos.forEach(
        function(toDo) {
          result += '<li>' + toDo + '</li>';
        }
      );

      return '<ul>' + result + '</ul>'
    }
  }

  return ownerToDos
}
