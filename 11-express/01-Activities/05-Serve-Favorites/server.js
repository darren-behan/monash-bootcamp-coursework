const http = require("http");

const PORT = 8080;

// Create a function which handles incoming requests and sends responses
const handleRequest = (req, res) => {

  // Capture the url the request is made to
  const path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

  case "/":
    return displayRoot(res);

  case "/food":
    return displayFoods(res);

  case "/movie":
    return displayMovies(res);

  case "/frameworks":
    return displayFrameworks(res);

  default:
    return display404(path, res);
  }
}

const server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, () => {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// When someone visits the "http://localhost:8080/" path, this function is run.
const displayRoot = (res) => {
  const myHTML = "<html>" +
    "<head>" +
    "<style>" +
    "h1 {color: white; background-color: red; width: 100%; padding: 20px;}" +
    "a {margin: 50px 10px; text-decoration: none; color: green; border: solid 1px green; padding: 10px 20px;}" +
    "</style>" +
    "</head>" +
    "<body><h1>Home Page</h1>" +
    "<a href='/food'>Favorite Foods </a>" +
    "<a href='/movie'>Favorite Movies </a>" +
    "<a href='/frameworks'>Favorite CSS Frameworks</a>" +
    "</body></html>";

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}

// When someone visits the "http://localhost:8080/food" path, this function is run.
const displayFoods = (res) => {
  const myHTML = "<html>" +
    "<head>" +
    "<style>" +
    "h1 {color: white; background-color: red; width: 100%; padding: 20px;}" +
    "a {margin: 50px 10px; text-decoration: none; color: green; border: solid 1px green; padding: 10px 20px;}" +
    "</style>" +
    "</head>" +
    "<body><h1>My Favorite Foods</h1>" +
    "<ol><li>Pasta</li><li>Burger</li><li>Pizza</li></ol>" +
    "<a href='/'>Go Home</a>" +
    "</body></html>";

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}

// When someone visits the "http://localhost:8080/movie" path, this function is run.
const displayMovies = (res) => {
  const myHTML = "<html>" +
    "<head>" +
    "<style>" +
    "h1 {color: white; background-color: red; width: 100%; padding: 20px;}" +
    "a {margin: 50px 10px; text-decoration: none; color: green; border: solid 1px green; padding: 10px 20px;}" +
    "</style>" +
    "</head>" +
    "<body><h1>My Favorite Movies</h1>" +
    "<ol><li>Die Hard</li><li>Star Wars</li><li>Rocky</li></ol>" +
    "<a href='/'>Go Home</a>" +
    "</body></html>";

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}

// When someone visits the "http://localhost:8080/frameworks" path, this function is run.
const displayFrameworks= (res) => {
  const myHTML = "<html>" +
    "<head>" +
    "<style>" +
    "h1 {color: white; background-color: red; width: 100%; padding: 20px;}" +
    "a {margin: 50px 10px; text-decoration: none; color: green; border: solid 1px green; padding: 10px 20px;}" +
    "</style>" +
    "</head>" +
    "<body><h1>My Favorite CSS Frameworks</h1>" +
    "<ol><li>React</li><li>Bootstrap</li><li>Bulma</li></ol>" +
    "<a href='/'>Go Home</a>" +
    "</body></html>";

  // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
  res.writeHead(200, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}

// When someone visits any path that is not specifically defined, this function is run.
const display404 = (url, res) => {
  const myHTML = "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";

  // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
  res.writeHead(404, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  res.end(myHTML);
}
