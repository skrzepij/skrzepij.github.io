import { browser, by, element } from 'protractor'

export class AppPage {
  navigateTo() {
    return browser.get('/')
  }

  getTitleText() {
    return element(by.css('rs-root h2')).getText()
  }
}
