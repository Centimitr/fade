import { FadePage } from './app.po';

describe('fade App', function() {
  let page: FadePage;

  beforeEach(() => {
    page = new FadePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fade works!');
  });
});
