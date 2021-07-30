const mongoose = require("mongoose")

let Schema = mongoose.Schema({
	type:String,
	aineet:String,
	ohje:String,
	keyword:String,
	price:Number,
	user:{type:String,index:true}
})

module.exports = mongoose.model("Item",Schema);