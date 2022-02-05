const express = require('express');
const router = express.Router();


/* GET home page. */

router.get('/', function(req,res, next){
    res.render('index', {
        locals: {
            title: "Movies Express"
        },
        partials: {
            partial: '/partials/home'
        }
    });
})


module.exports = router