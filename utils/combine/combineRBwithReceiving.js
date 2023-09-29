// Add each RB's rushing stats to their receiving stats, PFF info, snap percentage, and team rankings

// import files
import writeToFile from "../writeToFile.js";
// stats
import rb from "../../data/2023/stats/convertedData/rbStatsConverted.json" assert { type: "json" };
import wr_te from "../../data/2023/stats/convertedData/wr_teStatsConverted.json" assert { type: "json" };
// fantasyPros
import snapPercentage from "../../data/2023/stats/convertedData/snapPercentagesConverted.json" assert { type: "json" };
import fantasyPoints from "../../data/2023/stats/fantasyPros/pprPoints2022.json" assert { type: "json" };
// team rankings
import teamRankings from "../../data/2023/ranking/rankings.json" assert { type: "json" };
// pff
import combinedPFF from "../../data/2023/stats/combinedData/combinedPFFinfo.json" assert { type: "json" };
import allList from "../../data/2023/stats/proFootballFocus/top300ListPFF.json" assert { type: "json" };

let rbData = (list, rbStats, wrStats, pffInfo, snap, team) => {
  let object = new Map();
  let data = {};

  // loop through list and only add QBs
  list.forEach((player) => {
    if (player.position === "RB") {
      data.name = player.name;
      data.position = player.position;
      data.link = pffInfo[player.name].link;
      data.team = team[pffInfo[player.name].team];

      data.stats = {
        2023: {
          rank: parseInt(pffInfo[player.name].rank) ?? "N/A",
          positional_rank: pffInfo[player.name].positional_rank,
          overall_grade: pffInfo[player.name].overall_grade ?? "N/A",
          previous_year_points: fantasyPoints[player.name]?.points ?? "N/A",
          games_played: parseInt(
            rbStats[player.name]?.stats.games_played ?? "N/A"
          ),
          snap_percentage:
            parseInt(snap[player.name]?.snap_percentage) ?? "N/A",
          attempts: parseInt(rbStats[player.name]?.stats.attempts ?? "N/A"),
          rushing_yards:
            parseInt(
              rbStats[player.name]?.stats.rushing_yards?.replace(/,/g, "")
            ) ?? "N/A",
          rushing_touchdowns:
            parseInt(rbStats[player.name]?.stats.touchdowns) ?? "N/A",
          yards_per_game:
            parseFloat(rbStats[player.name]?.stats.yards_per_game) ?? "N/A",
          first_downs:
            parseInt(rbStats[player.name]?.stats.first_downs) ?? "N/A",
          receptions: parseInt(wrStats[player.name]?.stats.receptions) ?? "N/A",
          targets: parseInt(wrStats[player.name]?.stats.targets) ?? "N/A",
          receiving_yards:
            parseInt(
              wrStats[player.name]?.stats.receiving_yards?.replace(/,/g, "")
            ) ?? "N/A",
          receiving_touchdowns:
            parseInt(wrStats[player.name]?.stats.touchdowns) ?? "N/A",
          receiving_yards_per_game:
            parseFloat(wrStats[player.name]?.stats.yards_per_game) ?? "N/A",
          receiving_first_downs:
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

let data = rbData(
  allList,
  rb,
  wr_te,
  combinedPFF,
  snapPercentage,
  teamRankings
);
writeToFile(
  "../../data/2023/stats/combinedData/combinedRBwithReceiving.json",
  data
);
