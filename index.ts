// Small example showing the code.

import { Portfolio } from "./src/Portfolio";
import { Stock } from "./src/Stock";

const pricesStock1 = {
  '2024-04-14T00:00:00.000Z': 1240,
  '2024-06-16T00:00:00.000Z': 1140,
  '2024-09-21T00:00:00.000Z': 1340,
};
const pricesStock2 = {
  '2024-04-14T00:00:00.000Z': 640,
  '2024-06-16T00:00:00.000Z': 634,
  '2024-09-21T00:00:00.000Z': 691,
};

const stock1 = new Stock(pricesStock1, 'USD', 34);
const stock2 = new Stock(pricesStock2, 'USD', 19);

const porfolio = new Portfolio([stock1, stock2])

// Get the profit between 2024-04-14 and 2024-09-21
const from = new Date('2024-04-14');
const to = new Date('2024-09-21');
const profit = porfolio.profit(from, to);

console.log(`The profit of the given portafolio is USD ${profit}`);

// Get the annualized return between 2024-04-14 and 2024-09-21
const annualizedReturn = porfolio.annualizedReturn(from, to);

console.log(`The annualized return of the given portafolio is ${annualizedReturn}`);