describe("get top 300 player grades", () => {
  let resultsMap = new Map();
  it("gets top 300 PFF player grades", () => {
    cy.visit(
      "https://www.pff.com/news/fantasy-football-rankings-2023-dynasty-superflex-top-300"
    );

    cy.readFile(
      "/Users/alejandro/Desktop/projects/fantasyData/data/2023/stats/proFootballFocus/top300ListPFF.json"
    ).then((data) => {
      data.forEach((element, index) => {
        let overallRank = "";
        if (index >= 241 && index <= 250) {
          let link = element.link;

          // go to each player page

          cy.visit(link);
          cy.location("href").should("eq", link);

          // get player info

          cy.get(
            ":nth-child(1) > .kyber-grade-badge > .kyber-grade-badge__info > .kyber-grade-badge__info-text"
          ).as("overallRank");
          cy.get("@overallRank").should(($el) => {
            expect($el).to.be.visible;
            const text = $el.text();
            overallRank = text;

            let data = {
              name: element.name,
              overall_grade: overallRank,
            };
            resultsMap.set(element.name, data);
          });

          cy.go("back");
        }
      });
    });
  });

  it("writes top 300 PFF player grades to a file", () => {
    let results = Object.fromEntries(resultsMap);
    let jsonString = JSON.stringify(results, null, " ");
    console.log(jsonString);

    cy.writeFile(
      "./data/2023/stats/proFootballFocus/top300Grades2.json",
      jsonString
    );
  });
});
