# Database Setup Instructions

## Use the following instructions to get, transform, and enter the data into the database.

## Table of Contents

1. [Overall List](#1-overall-list)
2. [Player Grades](#2-player-grades)
3. [Fantasy Points](#3-fantasy-points)
4. [Snap Percentage](#4-snap-percentage)
5. [QB Stats](#5-qb-stats)
6. [RB Stats](#6-rb-stats)
7. [WR_TE Stats](#7-wr_te-stats)
8. [Rankings](#8-rankings)
9. [Combine Data](#9-combine-data)

### 1. Overall List

<p>Go to the pff website and get the url for an overall list. For the 2023 season, I used the top 300 superflex players; however, any list for the other formats can be used as long as the data is in a table in one page. For example:</p>

![2023 Top 300 List](../lib/images/2023top300List.png)

 <p>Use CypressJS to create a script that scrape the data from the website. Be sure the write the data to a json file and that the data is stored in an array. You will loop through this array later on. Use the <i>getTop300.cy.js</i> file as an example. If the file does not have a separate step for writing the data to a json file than the code should be refractor to include this step.</p>

### 2. Player Grades

<p>Get the player grade for each player in the top 300 list. Use the <i>getPlayerPFFGrades.cy.js</i> as an example. The file will take longer than the other files because the code has to click on each player, get the grade, go back, and repeat for the next player in the list. You will need to loop through 20 players at a time. Be sure it writes grades to <i>top300Grades2.json</i> file and go those grades over to the <i>top300Grades.json</i> file.</p>

### 3. Fantasy Points

<p>Get the total fantasy points from the previous season for each player. The FantasyPros website has that data; the <i>getFantasyPointsFromFP.cy.js</i> file gets this data. Be sure it writes the data in a map to a json file.</p>

### 4. Snap Percentage

<p>Get the snap from the previous season for each player. The FantasyPros website has that data; the <i>getSnapPercentageFromFP.cy.js</i> file gets this data. Be sure it writes the data in a map to a json file.</p>

`This file has to refractored so writes data to a map instead of an array!!`

### 5. QB Stats

<p>Get the stats for all QBs from the espn website. The <i>qbStatsFromEspn.cy.js</i> file gets this data. Be sure it writes the data in a map to a json file.</p>

`This file has to refractored so writes data to a map instead of an array, it writes to a json file in a separate it block, and it formats the names of players!!`

### 6. RB Stats

<p>Get the stats for all RBs from the espn website. The <i>rbStatsFromEspn.cy.js</i> file gets this data. Be sure it writes the data in a map to a json file.</p>

`This file has to refractored so writes data to a map instead of an array, it writes to a json file in a separate it block, and it formats the names of players!!`

### 7. WR_TE Stats

<p>Get the stats for all WRs and TEs from the espn website. The <i>wr_teStatsFromEspn.cy.js</i> file gets this data. Be sure it writes the data in a map to a json file.</p>

`This file has to refractored so writes data to a map instead of an array, it writes to a json file in a separate it block, and it formats the names of players!!`

### 8. Rankings

<p>Get the rankings for the offensive coordinator, offensive line, quarterback, and playoff schedule. The <i>rankings.json</i> file shows an example of this for 2022.</p>

### 9. Combine data

<p>Combine data from PFF, FP, and ESPN for QBs, RBs, WRs, and TEs into their respective files. Next combine the individual position files into one all player file.</p>
