export class Product {
  id: number;
  title: String;
  description: String;
  photoUrl: String;
  price: number;
  bundleId: number;
  rating: number;

  constructor() {
    this.id = 0;
    this.title = "";
    this.description = "";
    this.photoUrl = "";
    this.price = 0;
    this.bundleId = 0;
    this.rating = 0;
  }
}
