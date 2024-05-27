const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let texts = require('./texts.json')

app.get('/', (req, res) => {
    let i = Math.floor(Math.random() * texts.length);
    let testText = texts[i];
    res.render('index', { testText });
});

app.post('/result', (req, res) => {
    const testText = req.body.testText;
    const userInput = req.body.userInput;
    const timeTaken = parseFloat(req.body.timeTaken);
    const wordsPerMinute = ((userInput.split(' ').length / timeTaken)).toFixed(2);
    const accuracy = ((userInput.length / testText.length) * 100).toFixed(2);

    res.render('result', { wordsPerMinute, accuracy });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
