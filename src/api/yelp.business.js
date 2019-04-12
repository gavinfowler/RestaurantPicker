/*
 * Class to describe a single Movie
 */

export class Business {
  constructor(name, image, price, rating, address, phone) {
      this.name = name;
      this.image_url = image;
      this.price = price;
      this.address = address;
      this.phone = phone;
      this.rating = rating;
  }

  getName() {
      return this.name;
  }
  
  getImageUrl(){
    return this.image_url;
  }

  getPrice(){
    return this.price;
  }

  getAddress(){
    return this.address;
  }

  getPhone(){
    return this.phone;
  }

  getRating() {
      return this.rating;
  }
}