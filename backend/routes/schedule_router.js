var express = require('express');
var router = express.Router();
var Task = require('../module/schedule');

router.get('/', function (req, res, next) {
    Task.getSchedule(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/:id?', function(req, res, next) {
    Task.getFormById(req.params.id, function(err, rows)
    {  
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
}); 
router.post('/',function(req,res,next){
    console.log(req.body)
    Task.addSchedule(req.body, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    
    });
});
router.put('/', function (req, res, next) {
    Task.editSchedule(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;