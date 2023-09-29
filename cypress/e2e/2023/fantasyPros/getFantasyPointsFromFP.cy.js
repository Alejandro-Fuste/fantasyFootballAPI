describe("get each player's PPR fantasy points for the 2022 season and write to json file", () => {
  let resultsMap = new Map();
  it("get PPR points", () => {
    cy.visit(
      "https://www.fantasypros.com/nfl/reports/leaders/ppr.php?year=2022"
    );

    cy.location("href").should(
      "eq",
      "https://www.fantasypros.com/nfl/reports/leaders/ppr.php?year=2022"
    );

    cy.get("tbody > tr").as("tableRows");

    cy.get("@tableRows").should("have.length", 721);

    cy.get("@tableRows").each(($tr, index, $lis) => {
      const rowElement = $tr.get(0);
      const cells = rowElement.cells;

      let name = cells[1].innerText;

      let data = {
        name: name,
        points: parseFloat(cells[23].innerText),
      };

      resultsMap.set(name, data);
    });
  });

  it("write data to JSON file", () => {
    let results = Object.fromEntries(resultsMap);
    let jsonString = JSON.stringify(results, null, " ");
    console.log(jsonString);

    cy.writeFile(
      "./data/2023/stats/fantasyPros/pprPoints2022.json",
      jsonString
    );
  });
});
