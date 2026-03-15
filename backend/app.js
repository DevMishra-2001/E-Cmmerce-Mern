import express from 'express';
import product from './routes/productRoutes.js'
import errorHandleMiddleware from './middleware/error.js'
const app = express();

//middleware

app.use(express.json())

//route
app.use("/api/v1",product)

//ErrorHandle Middleware
app.use(errorHandleMiddleware)
export default app;