# QA Automation Practice

Practice project for API test automation with Postman and Newman, built on the public [Restful Booker](https://restful-booker.herokuapp.com) demo API.

## What is tested

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
| 8 | Create Booking without body | Expected 400 (see bug below) |

## Bug found

`POST /booking` with an empty body returns **500 Internal Server Error**. It should return **400 Bad Request** with a validation message. The test for this is left failing on purpose so the defect shows in every run.

## How to run

You need [Node.js](https://nodejs.org) (LTS).

```
npm install
npm run api
```

`npm run api` runs the collection with Newman and writes an HTML report to `reports/api-report.html`. `npm test` runs it with terminal output only.

## Project layout

```
postman/restful-booker.postman_collection.json   Postman collection with test scripts
package.json                                     Newman and the npm scripts
```

## Next

- Playwright UI tests (saucedemo.com)
- Running the suite in GitHub Actions
