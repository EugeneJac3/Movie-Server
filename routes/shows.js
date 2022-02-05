const express = require('express');
const db = require('../Model/db');
const router = express.Router();



/* GET home page. */

router.get('/', function(req,res, next){
    
    res.render('index', {
        locals: {
            showsData: db,
            path: "/shows"
    }, partials: {
        partial: "/partials/show-list"
    }
});
})

router.get("/:Title", (req,res) => {
    const {Title} = req.params;
    const show = db.find(f => f.Title === Title);

    if (show){
        res.render('index', { 
            locals:{
                showsData: show,
            },
            partials:{
                partial: '/partials/show-details'
            }
        },
        )
    } else {
        res.status(404).send(`no show with the handle ${Title}`);
    }
});

module.exports = router