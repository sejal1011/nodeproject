const express = require('express');

const router = express.Router();
const contact = require('./models/contact');


router.get('/contacts', function (req, res, next) {
    contact.find(function (err, contacts) {
        res.json(contacts);
    });
});

//add contact
router.post('/contacts', function (req, res) {
    let newContact = new contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save(function (err, contact) {
        if (err) {
            res.json({
                msg: 'Connection failed'
            });

        } else {
            res.json({
                msg: 'connection successfull';
            });
        }
    });
});

//delete contacts

router.delete('/contacts/:id', function (req, res, next) {
    contact.remove({
        _id: req.params.id
    }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;