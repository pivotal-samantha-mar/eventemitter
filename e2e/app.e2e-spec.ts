import { EventEmitterPage } from './app.po';

describe('event-emitter App', () => {
  let page: EventEmitterPage;

  beforeEach(() => {
    page = new EventEmitterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
