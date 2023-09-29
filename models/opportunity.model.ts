import { Grade } from './grade.model';

interface OpportunityProps {
  experience: number;
  depthChart: number;
  position: string;
  games?: number;
  snaps?: number;
  carries?: number;
  targets?: number;
}

export class Opportunity extends Grade {
  constructor(
    public experience: number,
    public depthChart: number,
    public position: string,
    public games?: number,
    public snaps?: number,
    public carries?: number,
    public targets?: number
  ) {
    super();

    this.experience = experience;
    this.depthChart = depthChart;
    this.position = position;
    this.games = games;
    this.snaps = snaps;
    this.carries = carries;
    this.targets = targets;
  }

  possibleTotalPoints: number = 0;

  baseArray: Array<number | undefined> = [this.depthChart];

  baseObject: OpportunityProps = {
    experience: this.experience,
    depthChart: this.depthChart,
    position: this.position,
  };

  variableSetter(
    experience: number,
    position: string
  ): Array<number | undefined> {
    let array!: Array<number | undefined>;
    if (experience === 0) {
      this.possibleTotalPoints = 100;
      this.baseObject = { ...this.baseObject };
      return (array = [...this.baseArray]);
    } else if (experience >= 1 && position === 'QB') {
      this.baseObject = {
        ...this.baseObject,
        games: this.games,
        snaps: this.snaps,
        carries: this.carries,
      };
      this.possibleTotalPoints = 400;
      return (array = [
        ...this.baseArray,
        this.games,
        this.snaps,
        this.carries,
      ]);
    } else {
      this.baseObject = {
        ...this.baseObject,
        games: this.games,
        snaps: this.snaps,
        carries: this.carries,
        targets: this.targets,
      };
      this.possibleTotalPoints = 500;
      return (array = [
        ...this.baseArray,
        this.games,
        this.snaps,
        this.carries,
        this.targets,
      ]);
    }
  }

  array: Array<number | undefined> = this.variableSetter(
    this.experience,
    this.position
  );

  returnObject(): {
    letter: string;
    description: string;
    points: number;
    percentage: number | string;
    propertyValues: OpportunityProps;
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
      propertyValues: this.baseObject,
    };
  }
}
