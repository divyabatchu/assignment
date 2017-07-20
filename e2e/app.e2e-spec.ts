import { EventsAngularPage } from './app.po';

describe('events-angular App', () => {
  let page: EventsAngularPage;

  beforeEach(() => {
    page = new EventsAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
