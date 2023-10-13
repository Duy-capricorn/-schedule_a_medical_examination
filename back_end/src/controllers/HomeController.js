import db from '../models/index';

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

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
};
