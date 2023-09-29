import { Grade } from './grade.model';

export class Talent extends Grade {
  constructor(
    public velocity: number,
    public acceleration: number,
    public agility: number,
    public age: number,
    public height: number,
    public weight: number,
    public skill_points: number
  ) {
    super();

    this.velocity = velocity;
    this.acceleration = acceleration;
    this.agility = agility;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.skill_points = skill_points;
  }

  array: Array<number> = [
    this.velocity,
    this.acceleration,
    this.agility,
    this.age,
    this.height,
    this.weight,
    this.skill_points,
  ];

  possibleTotalPoints: number = 550;

  returnObject(): {
    letter: string;
    description: string;
    points: number;
    percentage: number | string;
    propertyValues: {
      velocity: number;
      acceleration: number;
      agility: number;
      age: number;
      height: number;
      weight: number;
      skill_points: number;
    };
  } {
    let percentage = super.percentage(
      super.sumCriteriaPoints(this.array),
      this.possibleTotalPoints
    );

    let letterObject = super.criteriaGrade(percentage);

    return {
      points: super.sumCriteriaPoints(this.array),
      percentage,
      letter: letterObject.letter,
      description: letterObject.description,
      propertyValues: {
        velocity: this.velocity,
        acceleration: this.acceleration,
        agility: this.agility,
        age: this.age,
        height: this.height,
        weight: this.weight,
        skill_points: this.skill_points,
      },
    };
  }
}
