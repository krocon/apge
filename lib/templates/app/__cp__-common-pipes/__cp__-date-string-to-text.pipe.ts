import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: '__cp__DateStringToText'})
export class __capitalizedCp__DateStringToTextPipe implements PipeTransform {

  static date2Text(_date: Date): string {
    const year = _date.getFullYear();
    const month = _date.getMonth() + 1;
    const day = _date.getDate();
    const hour = _date.getHours();
    const minute = _date.getMinutes();
    const second = _date.getSeconds();

    const d = __capitalizedCp__DateStringToTextPipe.get2Digits(day);
    const m = __capitalizedCp__DateStringToTextPipe.get2Digits(month);
    const h = __capitalizedCp__DateStringToTextPipe.get2Digits(hour);
    const mi = __capitalizedCp__DateStringToTextPipe.get2Digits(minute);
    const s = __capitalizedCp__DateStringToTextPipe.get2Digits(second);
    return `${d}.${m}.${year} ${h}:${mi}:${s}`;
  }

  static get2Digits(n: number): string {
    if (n < 10) {
      return '0' + n;
    }
    return '' + n;
  }

  transform(s: string): string {
    if (!s) {
      return '';
    }

    try {
      const _date = new Date(s);
      return __capitalizedCp__DateStringToTextPipe.date2Text(_date);

    } catch (e) {
      return s;
    }
  }
}
