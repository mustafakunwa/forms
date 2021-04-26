import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  public quoteList: any[] = [];

  private daysOfTheWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];

  constructor() {}

  addNewQuote(quote: String) {
    const date = new Date();
    const dayOfTheWeek = this.daysOfTheWeeks[date.getDay()];
    const day = date.getDate();
    const year = date.getFullYear();
    this.quoteList.push({
      text: quote,
      timeCreated: `${dayOfTheWeek} ${day}, ${year}`,
    });
  }

  getQuote() {
    return this.quoteList;
  }

  removeQuote(index) {
    this.quoteList.splice(index, 1);
  }
}
