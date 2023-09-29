// combine top300WithRookies.json file with top300Grades.json file

// import files
import writeToFile from "../writeToFile.js";

// pff
import pffGrades from "../../data/2023/stats/proFootballFocus/top300Grades.json" assert { type: "json" };
import allList from "../../data/2023/stats/proFootballFocus/top300WithRookies.json" assert { type: "json" };

// create function and pass in files

let pffData = (list, json) => {
  let object = new Map();
  let data = {};

  // loop through list and give overall_grade of "N/A" for players without grades
  list.forEach((player) => {
    if (json[player.name] != undefined) {
      data.rank = player.rank;
      data.position = player.position;
      data.name = player.name;
      data.team = player.team;
      data.positional_rank = player.positional_rank;
      data.link = player.link;
      data.overall_grade = parseFloat(json[player.name].overall_grade);

      object.set(player.name, data);
    } else {
      data.rank = player.rank;
      data.position = player.position;
      data.name = player.name;
      data.team = player.team;
      data.positional_rank = player.positional_rank;
      data.link = player.link;
      data.overall_grade = "N/A";

      object.set(player.name, data);
    }
    data = {};
  });

  let obj = Object.fromEntries(object);

  return obj;
};

let data = pffData(allList, pffGrades);
writeToFile("../data/2023/stats/proFootballFocus/combinedPFFinfo.json", data);
