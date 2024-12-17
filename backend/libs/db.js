const mongoose  = require ('mongoose');
function connectDb (app){
    mongoose.connect(process.env.DATABASE_URL)
.then(() => {
     console.log('Connected To Database!');
     app.listen(3000, () =>{
        console.log('server is running on port 3000');
    });
    
    })
.catch(() => {
    console.log("connection failed!");
});    
}
module.exports = connectDb
