import express from 'express'
import { addProductToCart, getUserCart, updateCart } from '../controllers/cartController.js'
import authUser from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/add', authUser, addProductToCart)
cartRouter.post('/get', authUser, getUserCart)
cartRouter.post('/update', authUser, updateCart)

export default cartRouter