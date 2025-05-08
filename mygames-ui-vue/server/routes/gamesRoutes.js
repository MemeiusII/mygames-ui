import Express from 'express'
import * as DB from '../data/mongodbController.js'

const router = new Express.Router()
const DBHandle = DB.getDBHandle('mygames')

/* ------ GET ROUTE ------ */
// Get all games
router.get('/game', async (req, res) => {
  // Summarize games
  const summarizedGames = await DB.getSummarizedGames(DBHandle)
  // Return game
  res.json(summarizedGames)
})

// Get specific game
router.get('/game/:id', async (req, res) => {
  const game = await DB.getGameDetails(DBHandle, req.params.id)
  if (game) {
    res.json(game)
  } else {
    res.status(404).json({
      error: true,
      msg: `No game with id: ${req.params.id} found`
    })
  }
})
/* ------ DELETE ROUTE ------ */
// Delete specific game
router.delete('/game/:id', async (req, res) => {
  const isDeleted = await DB.deleteGame(DBHandle, req.params.id)
  if (isDeleted) {
    res.json({
      error: false,
      msg: `Game with id: ${req.params.id} successfully deleted.`
    })
  } else {
    res.status(404).json({
      error: true,
      msg: `No game with id: ${req.params.id} found`
    })
  }
})

/* ------ PUT ROUTE ------ */
async function validatePutFields (game) {
  let error = false
  let msg = ''
  if (!game) {
    msg = msg.concat('Game cannot be null. ')
    error = true
  }
  if (!game.id) {
    msg = msg.concat('Game ID cannot be null. ')
    error = true
  }
  if (!game.name) {
    msg = msg.concat('Game name cannot be null. ')
    error = true
  }
  if (!game.description) {
    msg = msg.concat('Game description cannot be null. ')
    error = true
  }
  if (!game.yearpublished) {
    msg = msg.concat('Game year cannot be null. ')
    error = true
  }
  if (!game.rating) {
    msg = msg.concat('Game rating cannot be null. ')
    error = true
  }
  if (!game.minplayers) {
    msg = msg.concat('Game minplayers cannot be null. ')
    error = true
  }
  if (!game.maxplayers) {
    msg = msg.concat('Game maxplayers cannot be null. ')
    error = true
  }
  if (!game.minplaytime) {
    msg = msg.concat('Game minplaytime cannot be null. ')
    error = true
  }
  if (!game.maxplaytime) {
    msg = msg.concat('Game maxplaytime cannot be null. ')
    error = true
  }
  if (!game.minage) {
    msg = msg.concat('Game minage cannot be null. ')
    error = true
  }
  if (!game.weight) {
    msg = msg.concat('Game weight cannot be null. ')
    error = true
  }
  if (!game.designers) {
    msg = msg.concat('Game designers cannot be null. ')
    error = true
  }
  if (!game.publishers) {
    msg = msg.concat('Game publishers cannot be null. ')
    error = true
  }
  if (!game.artists) {
    msg = msg.concat('Game authors cannot be null. ')
    error = true
  }
  // Check if game with id already exists
  const foundGame = await DB.getGameDetails(DBHandle, game.id)
  if (foundGame) {
    msg = msg.concat(`Game with id: ${foundGame.id} already exists.`)
    error = true
  }
  return { error, msg }
}

// Add game
router.put('/game', Express.json(), async (req, res) => {
  // Get request body
  const game = req.body

  // Validate fields
  const { error, msg } = await validatePutFields(game)
  if (error) {
    res.status(400).json({
      error: true,
      msg
    })
  } else {
    // Turn publishers, artists, designers strings to arrays
    // NOTE: Ternary due to split not returning array for string with no ','
    game.publishers = game.publishers.includes(',') ? game.publishers.split(',') : [game.publishers]
    game.artists = game.artists.includes(',') ? game.artists.split(',') : [game.artists]
    game.designers = game.designers.includes(',') ? game.designers.split(',') : [game.designers]

    // Add game to games
    await DB.addGame(DBHandle, game)
    // Serve response
    res.json({
      data: game,
      error: false,
      msg: `Game with id: ${game.id} added successfully.`
    })
  }
})
export default router

/* ------ PATCH ROUTE ------ */
async function validatePatchFields (game) {
  let error = false
  let msg = ''
  if (!game) {
    msg = msg.concat('Game cannot be null. ')
    error = true
  }
  if (!game.id) {
    msg = msg.concat('Game ID cannot be null. ')
    error = true
  }
  if (!game.name) {
    msg = msg.concat('Game name cannot be null. ')
    error = true
  }
  if (!game.description) {
    msg = msg.concat('Game description cannot be null. ')
    error = true
  }
  if (!game.yearpublished) {
    msg = msg.concat('Game year cannot be null. ')
    error = true
  }
  if (!game.rating) {
    msg = msg.concat('Game rating cannot be null. ')
    error = true
  }
  if (!game.minplayers) {
    msg = msg.concat('Game minplayers cannot be null. ')
    error = true
  }
  if (!game.maxplayers) {
    msg = msg.concat('Game maxplayers cannot be null. ')
    error = true
  }
  if (!game.minplaytime) {
    msg = msg.concat('Game minplaytime cannot be null. ')
    error = true
  }
  if (!game.maxplaytime) {
    msg = msg.concat('Game maxplaytime cannot be null. ')
    error = true
  }
  if (!game.minage) {
    msg = msg.concat('Game minage cannot be null. ')
    error = true
  }
  if (!game.weight) {
    msg = msg.concat('Game weight cannot be null. ')
    error = true
  }
  if (!game.designers) {
    msg = msg.concat('Game designers cannot be null. ')
    error = true
  }
  if (!game.publishers) {
    msg = msg.concat('Game publishers cannot be null. ')
    error = true
  }
  if (!game.artists) {
    msg = msg.concat('Game authors cannot be null. ')
    error = true
  }
  // Check if game with id exists
  const foundGame = await DB.getGameDetails(DBHandle, game.id)
  if (!foundGame) {
    msg = msg.concat(`Game with id: ${foundGame.id} does not exist.`)
    error = true
  }

  return { error, msg }
}
router.patch('/game', Express.json(), async (req, res) => {
  // Get updated game from body
  const updatedGame = req.body

  const { error, msg } = await validatePatchFields(updatedGame)
  if (error) {
    res.status(400).json({
      error: true,
      msg
    })
  } else {
    // Update game
    await DB.updateGame(DBHandle, updatedGame)

    res.json({
      error: false,
      msg: `Game with id: ${updatedGame.id} successfully updated.`
    })
  }
})
