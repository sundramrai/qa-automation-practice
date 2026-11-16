# QA Automation Practice

Practice project for test automation:

- **API tests** with Postman and Newman, on the public [Restful Booker](https://restful-booker.herokuapp.com) demo API
- **UI tests** with Playwright (TypeScript), on [Sauce Demo](https://www.saucedemo.com) and other practice sites

Both suites run in GitHub Actions on every push and pull request to `main`.

## API tests

The collection walks through the full life of a booking. The auth token and booking ID are saved as collection variables, so each request uses the data created by the one before it.

| # | Request | Checks |
|---|---------|--------|
| 1 | Get Auth Token | Token returned as a string, saved for later requests |
| 2 | Create Booking | Status 200, `bookingid` is a number, saved for later requests |
| 3 | Get Booking | Status, response time, field types, date format, checkin before checkout, exact values |
| 4 | Update Booking | Status 200, updated `lastname` and `totalprice` |
| 5 | Delete Booking | Status 201 |
| 6 | Delete with wrong token | Status 403 |
| 7 | Get Booking after delete | Status 404 |
| 8 | Create Booking without body | Status is not 200; currently asserts 500 (see bug below) |

## Bug found

`POST /booking` with an empty body returns **500 Internal Server Error**. It should return **400 Bad Request** with a validation message. The test asserts the current 500 response so the CI pipeline stays green; the bug is documented in the request description in the Postman collection.

## UI tests

| Area | Files |
|------|-------|
| Sauce Demo flows: header, cart count, cart item, checkout total | `tests/saucedemo.spec.ts` |
| Page Object Model: login, add to cart, cart check | `tests/improved/SauceDemoPOM.spec.ts`, `tests/Page/` |
| Element handling: locators, checkbox, dropdown, iframe, JS alerts, multiple tabs, tables, screenshots, page title | other files in `tests/improved/` |

Everything under `tests/` runs, locally and in CI. `practice/original/` keeps the first versions of the practice tests for reference; Playwright does not run them. Screenshots are saved only for failed tests, and failed tests are retried twice in CI (no retries locally, so flaky tests show up).

## How to run

You need [Node.js](https://nodejs.org) (LTS).

```
npm install
npx playwright install
```

| Command | What it does |
|---------|--------------|
| `npm run api` | Runs the Postman collection with Newman and writes an HTML report to `reports/api-report.html` |
| `npm test` | Runs the Postman collection with terminal output only |
| `npm run ui` | Runs all Playwright tests on Chromium, Firefox and WebKit |
| `npx playwright show-report` | Opens the Playwright HTML report |

## CI

`.github/workflows/playwright.yml` runs on every push and pull request to `main`. It runs the API tests, then the Playwright tests in `tests/` on Chromium, and uploads the Playwright HTML report as a build artifact.

## Project layout

```
postman/restful-booker.postman_collection.json   Postman collection with test scripts
tests/saucedemo.spec.ts                          Sauce Demo flow tests
tests/Page/                                      Page objects for Sauce Demo
tests/improved/                                  Element handling and POM tests
practice/original/                               First versions of the practice tests (not run)
playwright.config.ts                             Playwright settings (browsers, retries, screenshots)
.github/workflows/playwright.yml                 GitHub Actions pipeline
package.json                                     Dependencies and the npm scripts
```
