export class App {
    constructor() {
        // this.goTo();
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
    }

}

