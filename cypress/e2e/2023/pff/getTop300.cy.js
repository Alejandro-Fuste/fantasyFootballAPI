describe("top 300 data", () => {
  it("get top 300 data from PFF", () => {
    const results = [];

    cy.visit(
      "https://www.pff.com/news/fantasy-football-rankings-2023-dynasty-superflex-top-300"
    );

    cy.get(
      "#main > div.m-content > div > div > div.g-span-12.g-span-9-lg > div > div > div.m-article__main > article > div > div > table > tbody"
    ).should("have.length", 1);

    cy.get("tr").should("have.length", 304);

    cy.get("tr")
      .each(($tr, index, $lis) => {
        if (index >= 3 && index < 303) {
          const rowElement = $tr.get(0);
          const cells = rowElement.cells;

          results.push({
            rank: cells[0].innerText,
            position: cells[1].innerText,
            name: cells[2].innerText,
            team: cells[3].innerText,
            positional_rank: cells[4].innerText,
            link: cells[2].children[0].href,
          });
        }
      })
      .then(() => {
        console.log(results);
        cy.writeFile(
          "./data/2023/stats/proFootballFocus/top300WithRookies.json",
          JSON.stringify(results, null, " ")
        );
      });
  });
});
