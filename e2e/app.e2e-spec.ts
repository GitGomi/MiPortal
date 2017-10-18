import { MiPortalPage } from './app.po';

describe('mi-portal App', () => {
  let page: MiPortalPage;

  beforeEach(() => {
    page = new MiPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
