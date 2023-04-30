const express = require('express')
const router = express.Router()
const club = require('../models/Club.js')

router.get('/', (req, res, next) => {
    club.find().then((docs) => {
        res.render('home', { clubs: docs })
    }).catch(err => {
        console.log(err);
    })
})

router.post('/add', (req, res, next) => {
    const { name, players, coach } = req.body

    const clubCollection = new club({
        name, players, coach
    });
    clubCollection.save().then(result => {
        console.log("\n----------------------------------\nSuccessfully Insert:\n", result);
        res.redirect('/')
    }).catch(err => {
        console.error(err);
    })
})



router.get('/edit/:id', (req, res, next) => {
    club.findOneAndUpdate({ _id: req.params.id }).then((docs) => {
        res.render('edit', { clubs: docs })
    }).catch(err => {
        console.error(err);
    })

})

router.post('/edit/:id', (req, res, next) => {
    club.findOneAndUpdate({ _id: req.params.id }, req.body).then((docs) => {
        console.log("\n----------------------------------\nSuccessfully update:\n", docs);
        res.redirect('/')
    }).catch(err => {
        console.error(err);
    })

})
router.get('/delete/:id', (req, res, next) => {
    club.findByIdAndDelete({ _id: req.params.id }).then((docs) => {
        console.log("\n----------------------------------\nSuccessfully delete:\n", docs);
        res.redirect('/')
    }).catch((err) => {
        console.error(err);
    })
})

router.get('/aboutme', (req, res, next) => {
    res.render('aboutMe')
})
module.exports = router;