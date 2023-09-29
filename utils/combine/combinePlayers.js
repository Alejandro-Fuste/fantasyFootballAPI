// Combine players from each position group into one files

// import files
import writeToFile from "../writeToFile.js";
import quarterbacks from "../../data/2023/stats/combinedData/combinedQBwithRushing.json" assert { type: "json" };
import runningbacks from "../../data/2023/stats/combinedData/combinedRBwithReceiving.json" assert { type: "json" };
import receivers_tight_ends from "../../data/2023/stats/combinedData/combinedWR_TEwithPFF.json" assert { type: "json" };
import allList from "../../data/2023/stats/proFootballFocus/top300ListPFF.json" assert { type: "json" };

let allData = (list, qb, rb, wr_te) => {
  let object = new Map();
  let data = {};

  // loop through list and only add QBs
  list.forEach((player) => {
    if (player.position === "QB") {
      data = qb[player.name];

      object.set(player.name, data);
    } else if (player.position === "RB") {
      data = rb[player.name];

      object.set(player.name, data);
    } else if (player.position === "WR" || player.position === "TE") {
      data = wr_te[player.name];

      object.set(player.name, data);
    }

    data = {};
  });

  let obj = Object.fromEntries(object);

  return obj;
};

let data = allData(allList, quarterbacks, runningbacks, receivers_tight_ends);
writeToFile("../../data/2023/stats/combinedData/combinedAllPlayers.json", data);
