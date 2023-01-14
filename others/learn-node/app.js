/* const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${name} and ${id}`);
});

customEmitter.on("response", () => {
  console.log(`hahhha`);
});

customEmitter.emit("response", "john", 34);
 */

/* const { writeFileSync } = require("fs");
for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/big.txt", `hello world ${i}\n`, { flag: "a" });
}
 */

/* const { createReadStream } = require("fs");

const stream = createReadStream(
  "./content/big.txt",
  { highWaterMark: 90000 },
  { encoding: "utf8" }
);

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
 */

