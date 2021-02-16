import { environment } from '../env.js';

export class App {
    constructor() {
        this.pageContent = "";
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

        this.init(view)
    }
    init(view){
        if (view === 'order-pizza') {
            this.getPizzas();
        }
    }

    getPizzas(){
        fetch(environment.urlApi)
            .then(res => res.json())
            .then(data => {
                if (data && data.pizzas) {
                    console.log(data.pizzas);
                }
            })
    }
}

