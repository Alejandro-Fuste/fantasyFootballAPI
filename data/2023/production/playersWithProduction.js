// const filteredPlayers = require("../players/filteredPlayers.json");
const productionAPI = require("../../utils/sportRadarAPI");
// const writeToFile = require("../../utils/writeToFile");
const appendToFile = require("../../utils/appendToFile");

const filteredPlayers = {
  "Justin Jefferson": {
    full_name: "Justin Jefferson",
    first_name: "Justin",
    last_name: "Jefferson",
    sportradar_id: "4131d4ee-0318-4bb5-832a-4dec80668a4f",
    position: "WR",
    team: "MIN",
    age: 24,
    birth_date: "1999-06-16",
    height: "73",
    weight: "195",
    years_exp: 3,
    status: "Active",
  },
  "Justin Herbert": {
    full_name: "Justin Herbert",
    first_name: "Justin",
    last_name: "Herbert",
    sportradar_id: "f0a8f8e3-b9e9-46ed-85e4-eec6452a8a44",
    position: "QB",
    team: "LAC",
    age: 25,
    birth_date: "1998-03-10",
    height: "78",
    weight: "236",
    years_exp: 3,
    status: "Active",
  },
};

const playersProductionMap = new Map();

// make api call and write to json file
async function getAndWriteData(id) {
  // create new map to add objects

  let data = await productionAPI.getPlayerStats(id);

  let object = {
    name: data.name,
    first_name: data.first_name,
    last_name: data.last_name,
    sportradar_id: data.id,
    position: data.position,
    birth_date: data.birth_date,
    experience: data.experience,
    rookie_year: data.rookie_year,
    height: data.height,
    weight: data.height,
    team: data.team,
    stats: data.seasons,
  };

  // add production info to existing info
  playersProductionMap.set(data["name"], object);

  // convert map to json
  let obj = Object.fromEntries(playersProductionMap);
  let jsonString = JSON.stringify(obj, null, " ");

  appendToFile("./playersProduction.json", jsonString);
  return data;
}

// loop through filtered players
for (const property in filteredPlayers) {
  // make api call
  getAndWriteData(filteredPlayers[property]["sportradar_id"]);
}
