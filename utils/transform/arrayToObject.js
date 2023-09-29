// make arrays into objects

// import files
import writeToFile from "../writeToFile.js";
import allPlayers from "../../data/2023/stats/espn/allPlayerStats.json" assert { type: "json" };
import snapPercentages from "../../data/2023/stats/fantasyPros/snapPercentageFromFP.json" assert { type: "json" };
import pff from "../../data/2023/stats/proFootballFocus/top300WithRookies.json" assert { type: "json" };
import qbs from "../../data/2023/stats/formatted/formattedQBStatsFromEspn.json" assert { type: "json" };
import rbs from "../../data/2023/stats/formatted/formattedRBStatsFromEspn.json" assert { type: "json" };
import wrs_tes from "../../data/2023/stats/formatted/formattedWR_TE_statsFromEspn.json" assert { type: "json" };

let allPlayerMap = new Map();
let snapPercentagesMap = new Map();
let pffMap = new Map();
let qbMap = new Map();
let rbMap = new Map();
let wr_teMap = new Map();

// function to loop through data and create map

function converter(data, fileLocation, type) {
  if (type === "all") {
    data.forEach((element) => {
      // add player and their data
      allPlayerMap.set(element["name"], element);
    });

    writeToFile(fileLocation, allPlayerMap);
  } else if (type === "snap") {
    data.forEach((element) => {
      // add player and their data
      snapPercentagesMap.set(element["name"], element);
    });

    writeToFile(fileLocation, snapPercentagesMap);
  } else if (type === "pff") {
    data.forEach((element) => {
      // add player and their data
      pffMap.set(element["name"], element);
    });

    writeToFile(fileLocation, pffMap);
  } else if (type === "qbStats") {
    data.forEach((element) => {
      // add player and their data
      qbMap.set(element["name"], element);
    });

    writeToFile(fileLocation, qbMap);
  } else if (type === "rbStats") {
    data.forEach((element) => {
      // add player and their data
      rbMap.set(element["name"], element);
    });

    writeToFile(fileLocation, rbMap);
  } else if (type === "wr_teStats") {
    data.forEach((element) => {
      // add player and their data
      wr_teMap.set(element["name"], element);
    });

    writeToFile(fileLocation, wr_teMap);
  }
}

// converter(
//   qbs,
//   "../data/2023/stats/convertedData/qbStatsConverted.json",
//   "qbStats"
// );

// converter(
//   rbs,
//   "../data/2023/stats/convertedData/rbStatsConverted.json",
//   "rbStats"
// );

// converter(
//   wrs_tes,
//   "../data/2023/stats/convertedData/wr_teStatsConverted.json",
//   "wr_teStats"
// );

// converter(
//   snapPercentages,
//   "../data/2023/stats/convertedData/snapPercentagesConverted.json",
//   "snap"
// );

converter(
  pff,
  "../data/2023/stats/convertedData/pffConvertedwithRookies.json",
  "pff"
);

// converter(
//     allPlayers,
//     "../data/2023/stats/convertedData/allPlayersConverted.json",
//     "all"
//   );
