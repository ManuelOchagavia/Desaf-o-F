import { Stock } from './Stock';

export class Portfolio {
  constructor (protected shares: Stock[]) {}

  /**
   * Gets the profit of the portfolio between the given dates.
   */
  public profit(from: Date, to: Date): number {
    if (from > to) throw RangeError('`From` should be before `to` date');

    return this.shares.reduce((acc, share) => {
      const fromPrice = share.price(from);
      const toPrice = share.price(to);

      return acc + (toPrice - fromPrice) * share.quantity;
    }, 0);
  }


  /**
   * Gets the annualized returns of the porfolio given two dates.
   * The formula was taken from https://abstractops.com/blog/how-to-calculate-stock-profit,
   * without converting to percentage.
   */
  public annualizedReturn(from: Date, to: Date): number {
    if (from > to) throw RangeError('`From` should be before `to` date');

    const daysDif = Math.floor((to.getTime() - from.getTime()) / (1000 * 3600 * 24));

    const [proceeds, costs] = this.shares.reduce((acc, share) => {
      const fromPrice = share.price(from);
      const toPrice = share.price(to);
      
      return [acc[0] + toPrice * share.quantity, acc[1] + fromPrice * share.quantity]
    }, [0,0])

    return (proceeds / costs) ** (365 / daysDif) - 1;
  }
}