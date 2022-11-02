
const mongoose = require("mongoose");
const Gym = require("../models/gymModel");
const router = require("express").Router();


router.post("/post", (req, res) => {
    let body = req.body;
    const gym = new Gym({
        name: body.name,
        age: body.age,
        gender: body.gender,
        locality: body.locality
    })
    gym.save()
        .then(data => {
            console.log(data)
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })

})

router.get("/get", (req, res) => {
    Gym.find()
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.send(err)
        })
})

module.exports = router;


