import { PruebaMuseoPage } from './app.po';

describe('prueba-museo App', () => {
  let page: PruebaMuseoPage;

  beforeEach(() => {
    page = new PruebaMuseoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
