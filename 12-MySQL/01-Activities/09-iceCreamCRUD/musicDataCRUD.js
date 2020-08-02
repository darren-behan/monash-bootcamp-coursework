var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "music_dataDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createSong();
});

function createSong() {
  console.log("Inserting a new song...\n");
  var query = connection.query(
    "INSERT INTO songs SET ?",
    {
      title: "Rocky Road",
      artist: "Michael Jackson",
      genre: "Jazz"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " song inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updateSong() {
  console.log("Updating all Rocky Road quantities...\n");
  var query = connection.query(
    "UPDATE songs SET ? WHERE ?",
    [
      {
        genre: "Jazz"
      },
      {
        title: "Rocky Road"
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " songs updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteSong() {
  console.log("Deleting all Dance genres...\n");
  connection.query(
    "DELETE FROM songs WHERE ?",
    {
      title: "Hello"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " songs deleted!\n");
      // Call readProducts AFTER the DELETE completes
      readSongs();
    }
  );
}

function readSongs() {
  console.log("Selecting all songs...\n");
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
