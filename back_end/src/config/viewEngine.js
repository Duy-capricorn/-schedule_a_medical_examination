import express from 'express';

function configViewEngine(app) {
    // chi được lấy dữ liệu trong thư mục public
    app.use(express.static('./src/public'));
    app.set('view engine', 'ejs'); //jsp, blade for if else while
    app.set('views', './src/views');
}

export default configViewEngine;
