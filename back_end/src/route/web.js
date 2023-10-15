import express from 'express';

import HomeController from '../controllers/HomeController';

const router = express.Router('/');

const initWebRoutes = (app) => {
    router.get('/', HomeController.getHomePage);
    router.get('/about', HomeController.getAboutPage);
    router.get('/crud', HomeController.getCRUD);
    router.post('/post-crud', HomeController.postCRUD);

    // rest AIP

    return app.use('/', router);
};

export default initWebRoutes;
