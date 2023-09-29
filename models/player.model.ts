export class Player {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public position: string,
    public team: string,
    public age: number,
    public height: string,
    public weight: string,
    public yearsExp: number,
    public depthChartOrder: number,
    public grades: object
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.team = team;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.yearsExp = yearsExp;
    this.depthChartOrder = depthChartOrder;
    this.grades = grades;
  }
}
