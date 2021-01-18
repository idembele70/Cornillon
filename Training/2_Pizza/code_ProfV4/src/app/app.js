import { environment } from '../env.js';
import { Pizza } from './models/pizza.js';

export class App {
  constructor() {
    this.pageContent = "";
    this.pizzas = [];

    this.slidesTag = null;
    this.detailsTag = null;
    this.cartTag = null;
  }

  get slideWidth() {
    return (window.innerWidth >= 500)
      ? window.innerWidth
      : 500;
  }

  async goTo(view) {
    await fetch('/src/views/header.html')
      .then(res => res.text())
      .then(data => this.pageContent += data);

    await fetch(`/src/views/${view}.html`)
      .then(res => res.text())
      .then(data => this.pageContent += data);

    await fetch('/src/views/footer.html')
      .then(res => res.text())
      .then(data => this.pageContent += data);

    document.body.innerHTML = this.pageContent;

    this.init(view);
  }

  init(view) {
    this.slidesTag = document.querySelector('.slides');
    this.detailsTag = document.querySelector('.details');
    this.cartTag = document.querySelector('.cart');

    if (view === 'order-pizza') {
      this.getPizzas();
    }
  }

  async getPizzas() {
    await fetch(environment.urlApi)
      .then(res => res.json())
      .then(data => {
        if (data && data.pizzas) {
          for (let pizza of data.pizzas) {
            const p = new Pizza(pizza);
            this.pizzas.push(p);
            this.createPizzaTag(p);
            this.configureNavSlideFor(p);
          }
        }
      });
  }

  createPizzaTag(pizza) {
    const pizzaTag = document.createElement('div');
    pizza.html = pizzaTag;

    pizzaTag.className = 'pizza';
    pizzaTag.style.width = `${this.slideWidth}px`;
    pizzaTag.innerHTML = `
      <h1>${pizza.name.toUpperCase()}</h1>
      <div class="controls">
        <div class="prev"></div>
        <div class="next"></div>
      </div>
    `;

    this.slidesTag.style.width = `${this.slideWidth*this.pizzas.length}px`;
    this.slidesTag.appendChild(pizzaTag);
  }

  configureNavSlideFor(pizza) {
    pizza.html
      .querySelector('.prev')
      .addEventListener('click', () => {
        const slidesTagLeft = (parseInt(this.slidesTag.style.left) || 0);
        const offsetLeft = slidesTagLeft + this.slideWidth;
        this.slidesTag.style.left = `${offsetLeft}px`;
      });

    pizza.html
      .querySelector('.next')
      .addEventListener('click', () => {
        const slidesTagLeft = (parseInt(this.slidesTag.style.left) || 0);
        const offsetLeft = slidesTagLeft - this.slideWidth;
        this.slidesTag.style.left = `${offsetLeft}px`;
      });
  }
}
