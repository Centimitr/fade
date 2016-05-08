export class FadePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fade-app h1')).getText();
  }
}
