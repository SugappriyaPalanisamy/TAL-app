import { IOccupation } from './occupation.model';

export class PremiumModel {
  Name: number;
  DoB: string;
  Age: Age;
  Occupation: IOccupation;
  DeathCover: number;
  DeathPremiumAmount?: number;

  constructor() {
    this.Name = null;
    this.DoB= null;
    this.Age = null;
    this.Occupation = null
    this.DeathCover = null;
    
  }
}
interface Age{
  Year: number;
  Month: number;
}
