import { ContactsListPage } from './app.po';

describe('contacts-list App', function() {
  let page: ContactsListPage;

  beforeEach(() => {
    page = new ContactsListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
