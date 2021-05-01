const mongoose = require('mongoose')
const Schema = mongoose.Schema

const laptopSchema = new Schema({
   	    merk:{
        type: String
        },
        processor:{
            type: String
        },
        display : {
            type: String
        },
	    sistemOperasi:{
        type: String
        },
        ram :{
            type: String
        },
        hardDrive : {
            type: String
        },
	    opticalDrive:{
        type: String
        },
        harga : {
            type: String
        }
})
module.exports =mongoose.model('laptop',laptopSchema)