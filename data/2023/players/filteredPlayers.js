const playerList = require("./players.json");
const writeToFile = require("../../utils/writeToFile");

const positionsList = ["QB", "RB", "WR", "TE"];

const playersMap = new Map();

for (const property in playerList) {
  if (
    positionsList.indexOf(playerList[property]["position"]) != -1 &&
    playerList[property]["status"] === "Active" &&
    playerList[property]["team"] != null
  ) {
    let data = {
      full_name: playerList[property]["full_name"],
      first_name: playerList[property]["first_name"],
      last_name: playerList[property]["last_name"],
      sportradar_id: playerList[property]["sportradar_id"],
      position: playerList[property]["position"],
      team: playerList[property]["team"],
      age: playerList[property]["age"],
      birth_date: playerList[property]["birth_date"],
      height: playerList[property]["height"],
      weight: playerList[property]["weight"],
      years_exp: playerList[property]["years_exp"],
      status: playerList[property]["status"],
    };

    playersMap.set(playerList[property]["full_name"], data);
  }
}

let obj = Object.fromEntries(playersMap);
let jsonString = JSON.stringify(obj, null, " ");

writeToFile("./filteredPlayers.json", jsonString);
