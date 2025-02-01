const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "mysql@123",
});

function getRandomId() {
    return [
      faker.string.uuid(),
       faker.internet.username(),
      faker.internet.email(),
       faker.internet.password(),
    ];
  }

let q = "INSERT INTO user(id, username, email, password) VALUES ?";
let data = [];

for(let i=0; i<100; i++){
    data.push(getRandomId());
    // console.log(getRandomId());
}

try {
  connection.query(q, [data], function (error, results) {
    if (error) throw error;
    console.log(results);
  });
} catch (err) {
  console.log(err);
}

connection.end();



// console.log(getRandomId());

// export const users = faker.helpers.multiple(createRandomUser, {
//   count: 5,
// });
