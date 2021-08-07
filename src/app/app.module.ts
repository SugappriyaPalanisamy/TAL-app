import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule} from '@angular/forms';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CustomDateFormatter } from './services/custom-date-formatter.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateFormatter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
