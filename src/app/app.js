import { Pizza } from './models/pizza.js';
import { environment } from '../env.js';

export class App {
    constructor() {
        this.pageContent = "";
        this.pizzas =  [];
        this.slidesTag = null;
        this.detailsTag = null;
        this.cartTag = null;
    }

    get slideWidth(){
        return (window.innerWidth >= 580) ? window.innerWidth : 580;
    }

    async goTo(view) {
        this.pageContent = "";
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

    getPizzas() {
        fetch(environment.urlApi)
            .then(res => res.json())
            .then(data => {
                if (data && data.pizzas) {
                    for (let pizza of data.pizzas) {
                        this.pizzas.push(new Pizza(pizza));
                    }
                   this.run();
                }
            });
    }
    run(){
        for (let pizza of this.pizzas) {
            this.createPizzaTag(pizza);
        }
    }
    createPizzaTag(pizza) {
        const pizzaTag = document.createElement('div');

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
} 
