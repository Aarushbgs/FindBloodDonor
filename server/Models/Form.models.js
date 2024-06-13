
const mongoose=require('mongoose');

const FormSchema=new mongoose.Schema({

    name:{
       type: String,
       required:true 
    },

    email:{
        type: String,
        required:true ,
        unique:true
     },

     phone:{
        type: String,
        required:true 
     },

     BloodGroup:{
        type: String,
        required:true 
     },
     City :{
        type: String,
        required:true 
     },
     gender:{
        type: String,
        required:true 
     },

});


FormSchema.pre('save', function(next) {
    // Convert username and email to lowercase before saving
    this.name = this.name.toLowerCase();
    this.email = this.email.toLowerCase();
    next();
  });

const FormData = mongoose.model('FormData', FormSchema);

module.exports=FormData;