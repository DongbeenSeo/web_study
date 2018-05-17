require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const randomstring = require('randomstring');
const bodyParser = require('body-parser');

const app = express()

const urls = [{
    // slug는 shortener url
    // lognUrl은 원래 url
    slug: randomstring.generate(8),
    longUrl: 'https://www.naver.com'
}]

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public'))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    const host = req.get('host');
    res.render('index.ejs', { host, urls })
})
app.get('/new', (req, res) => {
    if (req.query.secret === process.env.SECRET) {
        res.render('new.ejs', { secret: process.env.SECRET });
    } else {
        res.status(403);
        res.send('403 Forbidden')
    }
    res.render('new.ejs')
})

app.get('/:slug', (req, res) => {
    const urlItem = urls.find(item => item.slug === req.params.slug);
    if (urlItem) {
        res.redirect(301, urlItem.longUrl);
    } else {
        res.status(404);
        res.send('404 not found');
    }
})

app.post('/new', (req, res) => {
    if (req.body.secret === process.env.SECRET) {
        const urlItem = {
            longUrl: req.body.longUrl,
            slug: randomstring.generate(8)
        }
        urls.push(urlItem);
        res.redirect('/');
    } else {
        res.status(403);
        res.send('403 Forbidden')
    }
})

app.listen(3000, () => {
    console.log('listening...')
})