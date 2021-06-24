const express = require('express');
const exphbs  = require('express-handlebars');
require('dotenv').config();

// Initiate express
const app = express();

// Body parser
app.use(express.json());

// Api routes   
app.use('/api/users', require('./routes/users'))

// Render template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
    res.render('modules/index');
});

// Init web server
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`App is running on port ${port}`);
})
