import { App } from "./app/app.js";
import { Router } from "./app/router.js";

const app = new App();

Router.run(app);

window.addEventListener('hashchange', () => {
    Router.run(app);
});