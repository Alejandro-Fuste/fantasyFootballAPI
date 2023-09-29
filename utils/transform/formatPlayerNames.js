// get rid of the new line character in player names

// import files
import writeToFile from "../writeToFile.js";
import quarterbacks from "../data/qbStatsFromEspn.json" assert { type: "json" };
import runningbacks from "../data/rbStatsFromEspn.json" assert { type: "json" };
import receivers_tightEnds from "../data/wr_teStatsFromEspn.json" assert { type: "json" };

// format QBs
let formattedQBNames = quarterbacks.map((c) => {
  return c.name.replace(/\n[a-z]*/i, "");
});

let formattedQBs = formattedQBNames.map((c, i) => {
  return { name: c, stats: quarterbacks[i].stats };
});

// writeToFile("../data/formattedQBStatsFromEspn.json", formattedQBNames);

// format RBs

let formattedRBNames = runningbacks.map((c) => {
  return c.name.replace(/\n[a-z]*/i, "");
});

let formattedRBs = formattedRBNames.map((c, i) => {
  return { name: c, stats: runningbacks[i].stats };
});

// writeToFile("../data/formattedRBStatsFromEspn.json", formattedRBs)

// format WRs/TEs

let formattedWR_TE_Names = receivers_tightEnds.map((c) => {
  return c.name.replace(/\n[a-z]*/i, "");
});

let formattedWR_TE = formattedWR_TE_Names.map((c, i) => {
  return { name: c, stats: receivers_tightEnds[i].stats };
});

// writeToFile("../data/formattedWR_TE_statsFromEspn.json",formattedWR_TE)
