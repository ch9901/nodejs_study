// import { readFile } from "node:fs";

const fs = require("fs");
fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
