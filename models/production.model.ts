import { Grade } from './grade.model';

interface ProductionProps {
  position: string;
  passing_yards?: number;
  rushing_yards?: number;
  receiving_yards?: number;
  passing_touchdowns?: number;
  touchdowns?: number;
  receptions?: number;
}

export class Production extends Grade {
  constructor(
    public position: string,
    public passing_yards?: number,
    public rushing_yards?: number,
    public receiving_yards?: number,
    public passing_touchdowns?: number,
    public touchdowns?: number,
    public receptions?: number
  ) {
    super();

    this.position = position;
    this.passing_yards = passing_yards;
    this.rushing_yards = rushing_yards;
    this.receiving_yards = receiving_yards;
    this.passing_touchdowns = passing_touchdowns;
    this.touchdowns = touchdowns;
    this.receptions = receptions;
  }

  baseArray: Array<number | undefined> = [this.rushing_yards, this.touchdowns];

  baseObject: any = {
    rushing_yards: this.rushing_yards,
    touchdowns: this.touchdowns,
  };

  arrayConstructor(position: string): Array<number | undefined> {
    let array!: Array<number | undefined>;
    if (position === 'QB') {
      return (array = [
        ...this.baseArray,
        this.passing_yards,
        this.passing_touchdowns,
      ]);
    } else {
      return (array = [
        ...this.baseArray,
        this.receiving_yards,
        this.receptions,
      ]);
    }
  }

  propertyValueConstructor(position: string): ProductionProps {
    let object!: ProductionProps;
    if (position === 'QB') {
      return (object = {
        ...this.baseObject,
        passing_yards: this.passing_yards,
        passing_touchdowns: this.passing_touchdowns,
      });
    } else {
      return (object = {
        ...this.baseObject,
        receiving_yards: this.receiving_yards,
        receptions: this.receptions,
      });
    }
  }

  possiblePointsSetter(position: string): number {
    let possibleTotalPoints: number = 0;

    if (position === 'QB') {
      return (possibleTotalPoints = 667);
    } else {
      return (possibleTotalPoints = 500);
    }
  }

  array: Array<number | undefined> = this.arrayConstructor(this.position);

  returnObject(): {
    letter: string;
    description: string;
    points: number;
    percentage: number | string;
    propertyValues: ProductionProps;
  } {
    let percentage = super.percentage(
      super.sumCriteriaPoints(this.array),
      this.possiblePointsSetter(this.position)
    );

    let letterObject = super.criteriaGrade(percentage);

    return {
      points: super.sumCriteriaPoints(this.array),
      percentage,
      letter: letterObject.letter,
      description: letterObject.description,
      propertyValues: this.propertyValueConstructor(this.position),
    };
  }
}
