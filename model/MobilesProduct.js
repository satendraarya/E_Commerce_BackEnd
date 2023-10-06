const mongoose = require("mongoose");

const mobilesProductSchema = new mongoose.Schema({
    name: {
        type : String,
        required:[true,"Please enter the product's name"]
    },
    images : [{
        type :String ,
        required : true,
    }],
    price:{
        type:Number ,
        required:[true,'please provide a valid price']
    },
    colour: {
        type:String,
    },
    brand : {
        type:String,
        required:[true ,'company Name is Required'],
    },
    modelName : {
        type:String,
    },
    operatingSystem : {
        type:String,
    },
    cellularTechnology: {
        type:String,
    },
    about: [{
        type:String,
        required : [true, 'About this mobile']
    }],
});

module.exports=mongoose.model('mobilesProduct',mobilesProductSchema);