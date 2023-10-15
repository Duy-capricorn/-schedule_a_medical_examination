import db from '../models/index';

import CRUDservice from '../services/CRUDservice';

const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll();

        return res.render('HomePage.ejs', {
            data: JSON.stringify(data),
        });
    } catch (e) {
        console.log(e);
    }
};

const getAboutPage = (req, res) => {
    return res.render('test/aboutPage.ejs');
};

const getCRUD = (req, res) => {
    return res.render('crud.ejs');
};

const postCRUD = async (req, res) => {
    const message = await CRUDservice.create_new_user(req.body);
    console.log(message);
    await CRUDservice.create_new_user(req.body);
    return res.send('post crud from server!');
};

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
};
