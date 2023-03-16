import express from 'express'

import { createToken,stkPush } from '../controller/token.js'


const router = express.Router()

export default router.post('/',createToken,stkPush)

