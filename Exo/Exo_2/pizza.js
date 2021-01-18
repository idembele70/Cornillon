export class Pizza {
  constructor(id, name, category, ingredients, price) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.ingredients = ingredients;
    this.price = price;

    this.state = {
      current: false,
    };

    this.html = null;
  }
}