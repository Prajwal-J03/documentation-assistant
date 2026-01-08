import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Server is live!')
})

app.listen(PORT, ()=>{
    console.log(`Server is live at port: ${PORT}`)
})