import { browser, element, by } from 'protractor';

describe('Acme Message Processor E2E Tests', function () {

  let expectedMsg = 'Acme Message Processor';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
