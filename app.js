console.clear();

const path = require('path');


const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

// const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const contactRoute = require('./routes/contact.js')
const successRoute = require('./routes/success.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoute);
app.use('/shop', shopRoute);
app.use('/contact', contactRoute);
app.use('/success', successRoute);


app.use(errorController.get404);
app.listen(4004);