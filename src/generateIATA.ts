import fs from "fs";
import makeDirectory from "./utils/makeDirectory.js";
const travelagencies = require("./travelagencies.json");

const filePath: string = "assets/newTravelAgencies.json";
const prefixes = ["10", "96", null];

// const generateRandomIndex = (range) => {
//   const randomIndex = Math.floor(Math.random() * range);
//   return randomIndex;
// };
const newTravelAgencies = travelagencies.map((travelAgency) => {
  const index = generateRandomIndex(prefixes.length);

  if (prefixes[index] !== null) {
    console.log(prefixes[index]);
    travelAgency.iataNo = `${prefixes[index]}56723498`;
  }
  return travelAgency;
});

makeDirectory(filePath);

const json = JSON.stringify(newTravelAgencies, null, 2);

// // Save the updated JSON to a new file
fs.writeFile(filePath, json, "utf8", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("New JSON file created");
  }
});

// // console.log("jilfsjdlfds", newTravelAgencies);
