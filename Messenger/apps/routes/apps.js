var express = require('express');
var router = express.Router();

var Application = require('../dbModel/application');

router.get('/', function (req, res, next) {
    Application.find().exec(
        function (err, apps) {
            if (err) {
                return res.status(500).json(
                    { title: 'An error occured', error: err }
                );
            }
            res.status(200).json({
                msg: 'Success',
                obj: apps
            });
        });
});

router.post('/', function (req, res, next) {
    var app = new Application({
        name: req.body.name,
        desc: req.body.desc,
        apptype: req.body.apptype,
        tech: req.body.tech,
        desc: req.body.desc,
        business: req.body.business,
        subbusiness: req.body.subbusiness,
        os: req.body.os,
        dm: req.body.dm,
        pm: req.body.pm,
        cc: req.body.cc,
        criticality: req.body.criticality
    });
    app.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            msg: 'Saved message',
            obj: result
        });
    });
});

router.patch('/:id', function (req, res, next) {
    Application.findById(req.params.id, function (err, app) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!app) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: { message: 'Message not found' }
            });
        }
        app.name = req.body.name;
        app.desc = req.body.desc;
        app.apptype = req.body.apptype;
        app.tech = req.body.tech;
        app.desc = req.body.desc;
        app.business = req.body.business;
        app.subbusiness = req.body.subbusiness;
        app.os = req.body.os;
        app.dm = req.body.dm;
        app.pm = req.body.pm;
        app.cc = req.body.cc;
        app.criticality = req.body.criticality;

        app.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated application',
                obj: result
            });
        });
    });
});

router.delete('/:id', function (req, res, next) {
    Application.findById(req.params.id, function (err, app) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!app) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: { message: 'Message not found' }
            });
        }
        app.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                msg: 'Deleted message',
                obj: result
            });
        });
    })
});


router.get('/dash/:id', function (req, res, next) {
    //var id = '$criticality';
    var id = '$' + req.params.id;
    Application.aggregate([{ "$group": { _id: id, count: { $sum: 1 } } }])
        .exec(function (err, apps) {
            if (err) {
                return res.status(500).json(
                    { title: 'An error occured', error: err }
                );
            }
            res.status(200).json({
                msg: 'Success dashboard',
                obj: apps
            });
        });

});

module.exports = router;