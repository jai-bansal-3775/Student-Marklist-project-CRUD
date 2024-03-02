// import express from 'express'
// const app = express()
// const port = 3000
// import mongoose from 'mongoose'

// // 

// mongoose.connect('mongodb://0.0.0.0/jaidb',{
//     useCreateIndex:true,
//     serverSelectionTimeoutMS:2000,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("connection is successfull");
// }).catch((e)=>{
//     console.log("no connection ");
// });

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// import express  from 'express'
// const app = express();
// import mongoose from 'mongoose'
// import './models/Student.js'

//const DB_URL = "mongodb://localhost:27017/octa";
// you can use one of these if localhost is not working properly.
//const DB_URL = "mongodb://127.0.0.1:27017/octa";
// const DB_URL = "mongodb://0.0.0.0/octa";

//Database connection configuration
// const DB_OP = {
//     user: 'Jai_Bansal',
//     pass: 'agarwal_ji3775',
//     dbName: 'jaidb',
//     authSource: 'jaidb'
// }
// mongoose.connect(DB_URL,DB_OP);
// const conn = mongoose.connection;
// conn.once('open', () => {
//     console.log('successfully connected to database');
// })
// conn.on('error', (err) => {
//     console.log(`failed to connect to database ${err.message}`);
// })


//server configuration


/* Please SubScribe OctaCoder Youtube Channel
    https://www.youtube.com/@octacoder
 */

// Learning Schemas and Models
// import express  from 'express'
// const app = express();
// import mongoose from 'mongoose'

// const DB_URL = "mongodb://0.0.0.0/octa";

// // import createDoc from './models/Student.js'
// import connectdb from './db/connections.js';
// import {getAllDoc} from './models/Student.js';

// connectdb(DB_URL)

// // createDoc()
// getAllDoc()
// const PORT = 8080;
// app.listen(PORT, () => {
//     console.log(`App is listening on Port - ${PORT}`);
// });




import express  from 'express'
const app = express();
import mongoose from 'mongoose'
import {join} from 'path'
import web from './routes/web.js'
import connectdb from './db/connections.js';
const DB_URL = "mongodb://0.0.0.0/octa";



connectdb(DB_URL)

app.use(express.urlencoded({extended:false}))

app.use('/student',express.static(join(process.cwd(), "public")))
app.use('/student/edit',express.static(join(process.cwd(), "public")))
app.set("view engine" , "ejs")
app.use("/student", web)
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App is listening on Port - ${PORT}`);
});