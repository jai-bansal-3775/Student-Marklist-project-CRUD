import StudentModel from "../models/Student.js"

class StudentController{
    static createDoc = async (req,res) =>{
        // console.log("Create doc post e")
        // console.log(req.body)
        // res.redirect("/student")
        try {
            const {name , roll_no , marks} = req.body
            const doc = new StudentModel({
                name:name,
                roll_no : roll_no,
                marks:marks
            })
            const result = await doc.save()
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
    }  

    static getAllDoc = async (req,res)=>{
        // res.render("index")
        try {
            const result = await StudentModel.find()
            // console.log(result)
            res.render("index", {data:result})
        } catch (error) {
            console.log(error)
            
        }
    }

    static editDoc =async (req,res) =>{
        // console.log(req.params.id)
        // res.render("edit")
        try {
            const result = await StudentModel.findById(req.params.id)
            console.log(result) 
            res.render("edit", { data: result})
        } catch (error) {
            console.log(error)
        }
    }
    static updateDocById = async (req,res)=>{
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id , req.body)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
        res.redirect("/student")
    }
    static deleteDocById = async (req,res)=>{
        try
        {const result = await StudentModel.findByIdAndDelete(req.params.id)
        console.log(result)}
        catch(error){
            console.log(error)
        }
        // console.log(req.params.id)
        res.redirect("/student")
    }
}

export default StudentController