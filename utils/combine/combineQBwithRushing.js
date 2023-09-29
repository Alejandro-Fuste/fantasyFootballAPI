// Add each QB's rushing stats to their passing stats, PFF info, snap percentage, and team rankings

// import files
import writeToFile from "../writeToFile.js";
// stats
import qb from "../../data/2023/stats/convertedData/qbStatsConverted.json" assert { type: "json" };
import rb from "../../data/2023/stats/convertedData/rbStatsConverted.json" assert { type: "json" };
// fantasy pros
import snapPercentage from "../../data/2023/stats/convertedData/snapPercentagesConverted.json" assert { type: "json" };
import fantasyPoints from "../../data/2023/stats/fantasyPros/pprPoints2022.json" assert { type: "json" };
// team rankings
import teamRankings from "../../data/2023/ranking/rankings.json" assert { type: "json" };
// pff
import combinedPFF from "../../data/2023/stats/combinedData/combinedPFFinfo.json" assert { type: "json" };
import allList from "../../data/2023/stats/proFootballFocus/top300ListPFF.json" assert { type: "json" };

let qbData = (list, qbStats, rbStats, pffInfo, snap, team) => {
  let object = new Map();
  let data = {};

  // loop through list and only add QBs
  list.forEach((player) => {
    if (player.position === "QB") {
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
          games_played:
            parseInt(qbStats[player.name]?.stats.games_played) ?? "N/A",
          snap_percentage:
            parseInt(snap[player.name]?.snap_percentage) ?? "N/A",
          passing_attempts: parseInt(qbStats[player.name].stats.attempts),
          complete_percentage: parseFloat(
            qbStats[player.name].stats.completion_percentage
          ),
          passing_yards: parseInt(
            qbStats[player.name].stats.passing_yards.replace(/,/g, "")
          ),
          yards_per_game: parseFloat(qbStats[player.name].stats.yards_per_game),
          passing_touchdowns: parseInt(qbStats[player.name].stats.touchdowns),
          interceptions: parseInt(qbStats[player.name].stats.interceptions),
          sacks: parseInt(qbStats[player.name].stats.sacks),
          QBR: parseFloat(qbStats[player.name].stats.QBR),
          rushing_attempts:
            parseInt(rbStats[player.name]?.stats.attempts) ?? "N/A",
          rushing_yards:
            parseInt(
              rbStats[player.name]?.stats.rushing_yards?.replace(/,/g, "")
            ) ?? "N/A",
          rushing_touchdowns:
            parseInt(rbStats[player.name]?.stats.touchdowns) ?? "N/A",
          rushing_yards_per_game:
            parseFloat(rbStats[player.name]?.stats.yards_per_game) ?? "N/A",
          rushing_first_downs:
            parseInt(rbStats[player.name]?.stats.first_downs) ?? "N/A",
        },
      };

      object.set(player.name, data);
    }

    data = {};
  });

  let obj = Object.fromEntries(object);

  return obj;
};

let data = qbData(allList, qb, rb, combinedPFF, snapPercentage, teamRankings);
writeToFile(
  "../../data/2023/stats/combinedData/combinedQBwithRushing.json",
  data
);
