import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Injectable } from "@angular/core";
import { DatePipe } from '@angular/common';

@Injectable()

export class CustomDateFormatter extends NgbDateParserFormatter {
  readonly DELIMITER = '/';
  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    if (date) {
      let dateString = date.year + this.DELIMITER + date.month + this.DELIMITER + date.day;
      let formattedDate: string | null;
      formattedDate = new DatePipe('en-US').transform(dateString, 'dd/MM/yyyy');
      return formattedDate ? formattedDate : '';
    }
    else
      return '';
  }
}

