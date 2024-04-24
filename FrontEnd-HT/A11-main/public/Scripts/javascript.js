<javascript>
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Enable body parser to read POST data
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// Define GET route for contact page
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});

// Define POST route to handle form submission
app.post('/submit-form', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phoneNumber=req.body.phoneNumber;
    const emailAddress=req.body.emailAddress;
    const messageBox=req.body.messageBox;

    console.log(`Received new message from ${firstName} ${lastName}: ${messageBox}`);

    // Here you would typically save the data to a database, 
    // but for this example we're just printing it to the console

    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
</javascript>