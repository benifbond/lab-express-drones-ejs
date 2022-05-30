const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require("../models/Drone.model");


router.get('/drones', async(req, res, next) => {
try{
  const Drones = await Drone.find()
  console.log(Drones);
  res.render("drones/list", {Drones})
}catch(error){
  console.log("Error from the drone list", error)
}
});

router.get('/drones/create', async(req, res, next) => {
  res.render("drones/create-form")
});

router.post('/drones/create', async(req, res, next) => {
  try { const droneCreate =await Drone.create(req.body)
    res.redirect("/drones")
    console.log("drone created successfully")
  }catch (error){
       console.log("Error occured while creating drone", error)
     }
});

router.get('/drones/:Droneid/edit', async (req, res) => {
const drone = await Drone.findById(req.params.Droneid)
res.render('drones/update-form',{ drone})
});

router.get('/drones/:Droneid/edit', async (req, res) => {
  const{ Droneid } = req.params

  Drone.findById(Droneid)
  .then(theDrone =>res.render("/drones/:Droneid/edit",{drone:theDrone}
  .catch(err =>{console.log("Error occured in finding drone", error);})
  ))
  
  });

  
router.post('/drones/:Droneid/edit', async(req, res, next) => {
  const {Droneid} = req.params
  const{ name, propellers,speed} = req.body
Drone.findByIdAndUpdate(Droneid,{name,propellers,speed},{new:true})
  .then(updateDrone => res.redirect(`/drones/`))
  .catch((err) =>next(err))
});



router.post('/drones/:Droneid/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
