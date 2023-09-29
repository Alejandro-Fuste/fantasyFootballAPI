// import filtered players list, teams list, and models for talent, opportunity, offense
const filteredPlayers = require("../players/filteredPlayers.json");
const teamsList = require("../teams/teams.json");
const playerGrades = require("../grades/playerGrades.json");
const Talent = require("../../models/talent.model");
const Opportunity = require("../../models/opportunity.model");
const Offense = require("../../models/offense.model");

// const one = new Talent();

// create array variable for player names
// const players = [{name: "Josh Allen", talent: Talent()];

// create holder object variable
const holderObject = {};

// loop through names
// spread info from filtered player list
// add info from array into models
// create new object and added to holder object

// Create new object, spread playerGrades.json and add holder object
const updatedList = { ...playerGrades, ...holderObject };

// write to playerGrades.json file
