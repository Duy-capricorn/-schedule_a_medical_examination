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
    await CRUDservice.create_new_user(req.body);
    return res.send('post crud from server!');
};

const displayCRUD = async (req, res) => {
    const data = await CRUDservice.getAllUser();
    console.log('=========================');
    console.log(data);
    console.log('=========================');
    return res.render('displayCRUD.ejs', {
        dataTable: data,
    });
};

const getEditCRUD = async (req, res) => {
    const userId = req.query.id;
    if (userId) {
        const userData = await CRUDservice.getUserInfoById(userId);

        // check userData  not found

        // let userData
        res.render('editCRUD.ejs', {
            userData: userData,
        });
    } else {
        return res.send('User not found!');
    }
};

const putCURD = async (req, res) => {
    const data = req.body;
    const allUsers = await CRUDservice.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers,
    });
};

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayCRUD: displayCRUD,
    getEditCRUD: getEditCRUD,
    putCURD: putCURD,
};
