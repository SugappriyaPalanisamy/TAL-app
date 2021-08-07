import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule} from '@angular/forms';
import { NgbModule, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CustomDateFormatter } from './services/custom-date-formatter.service';
import { CustomAdapter } from  './services/custom-date-adapter.service';

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
    { provide: NgbDateParserFormatter, useClass: CustomDateFormatter },
    { provide: NgbDateAdapter, useClass: CustomAdapter }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
