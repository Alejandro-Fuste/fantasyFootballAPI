import { Grade } from './grade.model';

export class Offense extends Grade {
  constructor(
    public quarterback: number,
    public offensive_coordinator: number,
    public offensive_line: number
  ) {
    super();

    this.quarterback = quarterback;
    this.offensive_coordinator = offensive_coordinator;
    this.offensive_line = offensive_line;
  }

  array: Array<number> = [
    this.quarterback,
    this.offensive_coordinator,
    this.offensive_line,
  ];

  possibleTotalPoints: number = 300;

  returnObject(): {
    letter: string;
    description: string;
    points: number;
    percentage: number | string;
    propertyValues: {
      quarterback: number;
      offensive_coordinator: number;
      offensive_line: number;
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
        quarterback: this.quarterback,
        offensive_coordinator: this.offensive_coordinator,
        offensive_line: this.offensive_line,
      },
    };
  }
}
