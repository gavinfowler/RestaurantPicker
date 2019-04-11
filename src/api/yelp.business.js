/*
 * Class to describe a single Movie
 */

export class Business {
  constructor(name, rating) {
      this.name = name;
      this.rating = rating;
  }

  getName() {
      return this.name;
  }

  getRating() {
      return this.rating;
  }
}