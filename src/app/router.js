
export class Router {
    static run(app) {
        const HOME_PAGE = 0,
            ORDER_PIZZA_PAGE = 1,
            ADMIN_PAGE = 2;

        const routes = [
            'home',
            'order-pizza',
            'admin',
        ];
        if (!!location.hash) {
            switch (location.hash) {
                case '#':
                case `#${routes[HOME_PAGE]}`:
                    app.goTo(routes[HOME_PAGE])
                    break;
                case `#${routes[ORDER_PIZZA_PAGE]}`:
                    app.goTo(routes[ORDER_PIZZA_PAGE])
                    break;
                case `#${routes[ADMIN_PAGE]}`:
                    app.goTo(routes[ADMIN_PAGE])
                    break;
            }
        } else {
            app.goTo(routes[HOME_PAGE]);
        }
    }
}