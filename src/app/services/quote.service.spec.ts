import { QuoteService } from './Quote.service';

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    service = new QuoteService();
    service.quoteList = [];
  });

  it('should create a post in an array', () => {
    const qouteText = 'This is my first post';
    service.addNewQuote(qouteText);
    expect(service.quoteList.length).toBeGreaterThanOrEqual(1);
  });

  it('should remove a created post from the array of posts', () => {
    service.addNewQuote('This is my first post 2');
    service.removeQuote(0);
    expect(service.quoteList.length).toBeLessThan(1);
  });
});
