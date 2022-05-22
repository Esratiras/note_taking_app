const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes')

/* GET notes listing. */
router.get('/notes', function (req, res, next) {
    res.send('All notes');
});

router.post('/add-new-note', function (req, res, next) {
   const note = new Notes({
       title:req.body.title,
       description:req.body.description
   })
    note.save().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.json({message:err})
    })
});

module.exports = router;
