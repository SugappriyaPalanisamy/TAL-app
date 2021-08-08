import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ComponentFixture } from '@angular/core/testing';
import { NgbModule, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CustomDateFormatter } from './services/custom-date-formatter.service';
import { CustomAdapter } from './services/custom-date-adapter.service';
import { IOccupation } from './model/occupation.model';
import { PremiumModel } from './model/premium.model';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component:AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        NgbModule,
        FormsModule
      ],
      providers: [
        { provide: NgbDateParserFormatter, useClass: CustomDateFormatter },
        { provide: NgbDateAdapter, useClass: CustomAdapter }
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => { 
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Monthly premium calcualtor'`, () => {
    expect(component.title).toEqual('Monthly premium calcualtor');
  });
  it('form invalid when empty', () => { 
    expect(component.form.valid).toBeFalsy();
  });
  it('name field validity', () => {
    let name = component.form.controls['name']
    expect(name.valid).toBeFalsy();
    let errors = {}
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
    name.setValue('12');
    errors = name.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });
  it('Calculate premium amount if form is vaid', () => {
    expect(component.form.valid).toBeFalsy();
    let premium: PremiumModel = component.premium;
    component.form.controls['name'].setValue('user');
    component.form.controls['dob'].setValue('1989-07-24');
    component.calculateAge();

    let occupation: IOccupation = { Name: "Cleaner", Rating: 1.5 }
    component.form.controls['occupation'].setValue(occupation);
    component.form.controls['deathCover'].setValue(1234);
    component.calculate();
    expect(premium.Age.Year).toBe(32);
    expect(premium.DeathPremiumAmount).toBe(710.784);
    expect(component.form.valid).toBeTruthy();
  });

});
