const mysql = require("mysql");
const cTable = require("console.table");

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "top_songsDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
  connection.query("SELECT * FROM top_songsDB.top5000_songs WHERE POSITION BETWEEN 1 AND 3", function (
    err,
    result
  ) {
    if (err) {
      throw err;
    } else {
      console.table(result);
      connection.end();
    }
  });
}