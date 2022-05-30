const{Schema,model}= require("mongoose");
require("../db")

const droneSchema = new Schema(
    {
        name: String,
        propellers:Number,
        maxSpeed :Number,
    }
)
const Drone =model("Drone",droneSchema);
module.exports =Drone