import Express from 'express'
import cors from 'cors'
import GamesRouter from './routes/gamesRoutes.js'

// Express app
const app = new Express()

// Allow requests from localhost:5173 (Vite frontend)
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from the frontend dev server
  methods: ['GET', 'PUT', 'DELETE', 'PATCH'],       // You can customize allowed methods
  allowedHeaders: ['Content-Type'], // Allow headers if needed (optional)
}))

// Log requests
app.use((req, res, next) => {
    console.log(`${req.method} request at ${req.url}`)
    next()
})

// Routes
app.use('/data', GamesRouter)

app.use(Express.static('public'))

app.listen(3000, () => {
    console.log('listening on port 3000')
})
