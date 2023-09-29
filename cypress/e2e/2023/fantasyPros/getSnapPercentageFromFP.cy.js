describe("player snap percentages", () => {
  it("get all player percentages", () => {
    let results = [];
    // go to espn stats sight & verify
    cy.visit("https://www.fantasypros.com/nfl/reports/snap-counts/?show=perc");
    cy.location("href").should(
      "eq",
      "https://www.fantasypros.com/nfl/reports/snap-counts/?show=perc"
    );

    // page should land on NFL snap count leaders

    cy.get("h1").should("have.text", "NFL Snap Count Leaders (2022)");

    // get table rows
    cy.get("#data > tbody > tr").as("tableRows");
    cy.get("@tableRows").should("have.length", 601);

    // loop through table rows
    cy.get("@tableRows")
      .each(($tr, index, $lis) => {
        const rowElement = $tr.get(0);
        const cells = rowElement.cells;

        let formattedName = cells[0].innerText.replace(/\s$/, "");
        let formattedPercentage = cells[22].innerText.replace(/[%]$/, "");

        results.push({
          name: formattedName,
          snap_percentage: formattedPercentage,
        });
      })
      .then(() => {
        cy.writeFile(
          "./data/snapPercentageFromFP.json",
          JSON.stringify(results, null, " ")
        );
      });
  });
});
