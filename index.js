import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import TokenRoute from './router/token.js'


dotenv.config()

const app = express()

const PORT = process.env.PORT || 9000


app.get('/',(req,res)=>{
    res.send('M-Pesa Backend is running, Time to Pay')
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());
app.use('/token',TokenRoute)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})
