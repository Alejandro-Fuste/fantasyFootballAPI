// Add each WR's and TE's receiving stats to their PFF info, snap percentage, and team rankings

// import files
import writeToFile from "../writeToFile.js";
// stats
import wr_te from "../../data/2023/stats/convertedData/wr_teStatsConverted.json" assert { type: "json" };
// fantasyPros
import snapPercentage from "../../data/2023/stats/convertedData/snapPercentagesConverted.json" assert { type: "json" };
import fantasyPoints from "../../data/2023/stats/fantasyPros/pprPoints2022.json" assert { type: "json" };
// team rankings
import teamRankings from "../../data/2023/ranking/rankings.json" assert { type: "json" };
// pff
import combinedPFF from "../../data/2023/stats/combinedData/combinedPFFinfo.json" assert { type: "json" };
import allList from "../../data/2023/stats/proFootballFocus/top300ListPFF.json" assert { type: "json" };

let wr_te_Data = (list, wrStats, pffInfo, snap, team) => {
  let object = new Map();
  let data = {};

  // loop through list and only add QBs
  list.forEach((player) => {
    if (player.position === "WR" || player.position === "TE") {
      data.name = pffInfo[player.name].name;
      data.position = pffInfo[player.name].position;
      data.link = pffInfo[player.name].link;
      data.team = team[pffInfo[player.name].team];

      data.stats = {
        2023: {
          rank: parseInt(pffInfo[player.name].rank) ?? "N/A",
          positional_rank: pffInfo[player.name].positional_rank,
          overall_grade: pffInfo[player.name].overall_grade ?? "N/A",
          previous_year_points: fantasyPoints[player.name]?.points ?? "N/A",
          games_played: parseInt(
            wrStats[player.name]?.stats.games_played ?? "N/A"
          ),
          snap_percentage:
            parseInt(snap[player.name]?.snap_percentage) ?? "N/A",
          receptions: parseInt(wrStats[player.name]?.stats.receptions) ?? "N/A",
          targets: parseInt(wrStats[player.name]?.stats.targets) ?? "N/A",
          receiving_yards:
            parseInt(
              wrStats[player.name]?.stats.receiving_yards?.replace(/,/g, "")
            ) ?? "N/A",
          receiving_touchdowns:
            parseInt(wrStats[player.name]?.stats.touchdowns) ?? "N/A",
          yards_per_game:
            parseFloat(wrStats[player.name]?.stats.yards_per_game) ?? "N/A",
          first_downs:
            parseInt(wrStats[player.name]?.stats.first_downs) ?? "N/A",
        },
      };

      object.set(player.name, data);
    }

    data = {};
  });

  let obj = Object.fromEntries(object);

  return obj;
};

let data = wr_te_Data(
  allList,
  wr_te,
  combinedPFF,
  snapPercentage,
  teamRankings
);
writeToFile(
  "../../data/2023/stats/combinedData/combinedWR_TEwithPFF.json",
  data
);
