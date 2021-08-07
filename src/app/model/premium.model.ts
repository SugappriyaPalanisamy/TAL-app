import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Rating } from './occupation.model';

export class PremiumModel {
  Name: number;
  DoB: NgbDateStruct;
  Age: number;
  AgeText?:string
  Occupation: Rating;
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
