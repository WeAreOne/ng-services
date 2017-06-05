import { NgServicesPage } from './app.po';

describe('ng-services App', () => {
  let page: NgServicesPage;

  beforeEach(() => {
    page = new NgServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
