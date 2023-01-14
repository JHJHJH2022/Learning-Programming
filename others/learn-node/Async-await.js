const { readFile, writeFile } = require("fs").promises;
/* const util = require("util"); */

/* const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}; */

/* const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile); */
/* getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((err) => console.log(err)); */

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    console.log(
      await writeFile(
        "./content/result-new.txt",
        `Here is the result hahaahahahahh:${first},${second}`
      )
    );
  } catch (err) {
    console.log(err);
  }
};

start();

/* const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    // Blocking Code
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${j} & ${i}`);
      }
    }
    res.end("About Page");
  } else {
    res.end("Error Page");
  }
});

server.listen(5000, () => {
  console.log("Server Listening on Port 5000...");
}); */

/* const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`<p>Welcome to our home page</p><a href='/about'>About</a>`);
    res.end();
  }

  if (req.url === "/about") {
    res.end("This is the about page");
  }
  res.end(`<h1>Oops!</h1>
  <p>We can't seem to find the page you  are looking for</p>
  <a href='/'>back home</a>
  `);
});

server.listen(5000); */

/* const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello world"); */
