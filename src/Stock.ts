type Currency = 'USD' | 'CLP' 

type Prices = {
  [dateIso: string]: number
}

export class Stock {
  constructor (protected prices: Prices, private currency: Currency, public quantity: number) {}

  /**
   * Returns the price of the stock on a given date.
   */
  public price(date: Date): number {
    const isoStringDate = date.toISOString();
    return this.prices[isoStringDate];
  }
}