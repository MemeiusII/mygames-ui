import { MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from 'dotenv'

// Read the .env file
dotenv.config()

// Retrieve these from .env file
const DB_USER = process.env.DB_USER ?? 'username'
const DB_PASS = process.env.DB_PASS ?? 'password'
const DB_URL = process.env.DB_URL ?? 'user.mongodb.net'
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_URL}/?appName=CS404Cluster`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export function getDBHandle (dbName) {
  return client.db(dbName)
}

export async function getSummarizedGames (DBHandle) {
  const games = await DBHandle.collection('games')
    .find({})
    .project({ id: 1, name: 1, yearpublished: 1, image: 1, rating: 1 })
    .toArray()
  return games
}
export async function getGameDetails (DBHandle, gameId) {
  const game = await DBHandle.collection('games').findOne({ id: gameId })
  return game
}

export async function addGame (DBHandle, game) {
  const result = await DBHandle.collection('games').insertOne(game)
  return result.insertedId !== null || result.insertedId !== undefined
}

export async function updateGame (DBHandle, game) {
  const result = await DBHandle.collection('games').updateOne({ id: game.id }, { $set: { ...game } })
  return result.modifiedCount > 0
}

export async function deleteGame (DBHandle, gameId) {
  const result = await DBHandle.collection('games').deleteOne({ id: gameId })
  return result.deletedCount > 0
}
