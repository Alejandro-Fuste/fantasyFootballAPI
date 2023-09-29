describe("player stats", () => {
  it("gets quarterback stats", () => {
    const names = [];
    const stats = [];
    const mergedArray = [];

    // go to espn stats sight & verify
    cy.visit("https://www.espn.com/nfl/stats/player/_/view/offense");
    cy.location("href").should(
      "eq",
      "https://www.espn.com/nfl/stats/player/_/view/offense"
    );

    // page should land on QB passing stats

    cy.get(".headline").should("have.text", "NFL Player Passing Stats 2022");

    // click show more button

    cy.get(".tc > .AnchorLink").as("showMoreBtn");
    cy.get("@showMoreBtn").click();
    cy.get(
      '[data-idx="99"] > :nth-child(2) > .athleteCell__flag > .AnchorLink'
    ).should("have.text", "Amari Cooper");

    // get table rows for player names

    cy.get(
      "#fittPageContainer > div:nth-child(3) > div > div > section > div > div:nth-child(4) > div.ResponsiveTable.ResponsiveTable--fixed-left.mt4.Table2__title--remove-capitalization > div > table > tbody > tr"
    ).as("nameTr");
    cy.get("@nameTr").should("have.length", 100);

    cy.get("@nameTr")
      .each(($tr, index, $lis) => {
        const rowElement = $tr.get(0);
        const cells = rowElement.cells;

        names.push({
          name: cells[1].innerText,
        });
      })
      .then(() => {});

    // get player stats

    cy.get(
      "#fittPageContainer > div:nth-child(3) > div > div > section > div > div:nth-child(4) > div.ResponsiveTable.ResponsiveTable--fixed-left.mt4.Table2__title--remove-capitalization > div > div > div.Table__Scroller > table > tbody > tr"
    ).as("statsTr");
    cy.get("@statsTr").should("have.length", 100);

    cy.get("@statsTr")
      .each(($tr, index, $lis) => {
        const rowElement = $tr.get(0);
        const cells = rowElement.cells;

        stats.push({
          position: cells[0].innerText,
          games_played: cells[1].innerText,
          attempts: cells[3].innerText,
          completion_percentage: cells[4].innerText,
          passing_yards: cells[5].innerText,
          yards_per_game: cells[7].innerText,
          touchdowns: cells[9].innerText,
          interceptions: cells[10].innerText,
          sacks: cells[11].innerText,
          QBR: cells[13].innerText,
        });
      })
      .then(() => {
        names.map((c, i) => {
          mergedArray.push({ name: c.name, stats: stats[i] });
        });

        console.log(mergedArray);

        cy.writeFile(
          "./data/statsFromEspn.json",
          JSON.stringify(mergedArray, null, " ")
        );
      });
  });
});
