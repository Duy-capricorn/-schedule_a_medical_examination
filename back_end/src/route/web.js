import express from 'express';

import HomeController from '../controllers/HomeController';

const router = express.Router('/');

const initWebRoutes = (app) => {
    router.get('/', HomeController.getHomePage);
    router.get('/about', HomeController.getAboutPage);
    router.get('/crud', HomeController.getCRUD);

    router.get('/get-crud', HomeController.displayCRUD);
    router.get('/edit-crud', HomeController.getEditCRUD);
    router.post('/post-crud', HomeController.postCRUD);
    router.post('/put-crud', HomeController.putCURD);

    return app.use('/', router);
};

export default initWebRoutes;
