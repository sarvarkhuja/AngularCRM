export class DateHelper {
  static toModel(date: any): Date {
    return date ? new Date(date.year, date.month - 1, date.day, 5) : null;
  }

  static calculateWithoutTimeOffset(date: any): Date {
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - userTimezoneOffset);
  }
}
