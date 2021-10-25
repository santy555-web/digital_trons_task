var express = require('express');
var router = express.Router();
var Task = require('../module/register');

router.get('/', function (req, res, next) {
    Task.getForm(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
    Task.addForm(req.body, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.put('/:id', function (req, res, next) {
    Task.editForm(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;