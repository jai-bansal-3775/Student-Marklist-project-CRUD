// import mongoose from "mongoose";

// const studentSchema_ = new mongoose.Schema({
//     name:{type:String , required:true,trim:true},
//     age:{type:Number,required:true, min:18,max:50},
//     // fees:{type : mongoose.Decimal128m, required:true, validate : v=> v>=573.39},
//     hobbies:{type:Array},
//     isactive:{type:Boolean},
//     comments:[{value:{type:String}, publish:{type:Date,default:Date.now}}],
//     join:{type:Date, default:Date.now}

// })
// const studentModel = mongoose.model('studentt', studentSchema_)


// Creating Document for the database
// const createDoc = async ()=>{
//     try {
//         const studentDoc =  new studentModel({
//             name:'Jai Bansal',
//             age:20,
//             fees:50000.12,
//             hobbies:['Writing', 'Reading'],
//             isactive:true,
//             comments:[{value:'This is Jai Bansal'}]
        
//         })
        
//         // Saving Document
        
//         const result = await studentDoc.save()
//         console.log(result)
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// export default createDoc

// Retrieving the documents in mongodb

// const getAllDoc = async () =>{
//     const result = await studentModel.find()
//     console.log(result)
// }

// export {getAllDoc}


import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{type:String ,required:true, trim:true},
    roll_no :{type:Number,required:true,unique : true},
    marks:{type:mongoose.Decimal128 , required:true, min:0.0, max:100.0}
})

const StudentModel = mongoose.model("student", studentSchema)

export default StudentModel
























