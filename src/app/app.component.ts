import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment'
import { OccupationList, IOccupation } from './model/occupation.model';
import { PremiumModel } from './model/premium.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Monthly premium calcualtor';

  maxDate: NgbDateStruct;

  public submitted: boolean;
  public occupationList: IOccupation[] = OccupationList;

  public premium: PremiumModel;
  
  @ViewChild('premiumCalculatorForm') public form: NgForm;

  constructor() {
    this.premium = new PremiumModel()
  }

  ngOnInit(): void {
    let today = new Date();
    console.log(today)
    this.maxDate = { year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() };
    
  }
  calculateAge(): void {
    if (this.form.controls["dob"].errors)
      return;

    const birthDate = new Date(this.form.controls["dob"].value);

    let year = moment().diff(birthDate, 'years', false);
    let month = moment().diff(birthDate, 'months', false);

    this.premium.Age = {
      Year: year,
      Month: month
    }; 
  }
  calculate(): void {
    this.submitted = true;
    if (this.form.invalid)
      return;
    else
      this.premium.DeathPremiumAmount = ((this.premium.DeathCover * this.premium.Occupation.Rating * this.premium.Age.Year) / 1000 * 12);
    
  }

  reset() {
    this.form.reset();
    this.premium = new PremiumModel();
    this.submitted = false;
  }
}
