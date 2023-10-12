import express from 'express';

import HomeController from '../controllers/HomeController';

const router = express.Router('/');

const initWebRoutes = (app) => {
    router.get('/', HomeController.getHomePage);

    router.get('/about', HomeController.getAboutPage);

    // rest AIP

    return app.use('/', router);
};

export default initWebRoutes;
