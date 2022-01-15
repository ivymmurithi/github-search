import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: Date, args?: any): Date {
    let today:Date = new Date();
    return today;
  }

}
