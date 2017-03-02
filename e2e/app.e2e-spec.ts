import { NgBienvenidAppPage } from './app.po';

describe('ng-bienvenid-app App', function() {
  let page: NgBienvenidAppPage;

  beforeEach(() => {
    page = new NgBienvenidAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
