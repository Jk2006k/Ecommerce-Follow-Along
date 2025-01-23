const express  = require('express')
const connectDB = require('./config/db')
const app = express()
const PORT = 3000
const userRouter=require('./routes/Router')


app.use(express.json())
app.use("/api",userRouter)
app.use('/uploads',express.static('uploads'))

app.get('/',  (req, res) =>{
    try {
        res.send("Hello world")
    } catch (error) {
        res.status(500).send("Server error");
    }
});

app.listen(PORT, async ()=>{
    try {
        await connectDB();
        console.log(`Server is Running at ${PORT}`)
    } catch (error) {
        res.status(500).send("Server error");
    }
})

