import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  public quoteList: any[] = [];
  public quoteText: String = null;

  constructor(private service: QuoteService) {}

  ngOnInit() {
    this.quoteList = this.service.getQuote();
  }

  createNewQuote() {
    this.service.addNewQuote(this.quoteText);
    this.quoteText = null;
  }

  removeQuote(index) {
    this.service.removeQuote(index);
  }
}
