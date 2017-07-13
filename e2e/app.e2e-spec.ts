import { HelloAngular2Page } from './app.po';

describe('hello-angular2 App', () => {
  let page: HelloAngular2Page;

  beforeEach(() => {
    page = new HelloAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
