const express = require("express")
const app = express()
const cors = require("cors")

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",(req,res)=>{
    res.send("HELLO NOPOJJ")
})

app.listen(PORT,()=>{
    console.log(`Server is running : ${PORT}`);
    
})