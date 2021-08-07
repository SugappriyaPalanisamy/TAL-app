import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { OccupationList, IOccupation } from './model/occupation.model';
import { PremiumModel } from './model/premium.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'TAL-app';
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

    let today = new Date();
    let age = today.getFullYear() - this.form.controls["dob"].value.year;

    if (age == 0)
      this.premium.AgeText = this.form.controls["dob"].value.month + ' Months';

    else
      this.premium.AgeText = age + ' Months';

    this.premium.Age = age == 0 ? 1 : age;   
  }
  calculate(): void {
    this.submitted = true;
    if (this.form.invalid)
      return;
    else 
      this.premium.DeathPremiumAmount = (this.premium.DeathCover * this.premium.Occupation * this.premium.Age) / 1000 * 12;
    console.log(this.premium);
  }

  reset() {
    this.form.reset();
    this.premium = new PremiumModel();
    this.submitted = false;
  }
}
