export async function getSummarizedGames () {
  // 1. Query our data endpoint for getGames (asynchronous)
  const response = await fetch('http://localhost:3000/data/game')

  // 2. Use the response object to retrieve the JSON body (asynchronous)
  const gameData = await response.json()

  // 3. Return the data
  return gameData
}

export async function getGameDetails (gameId: number) {
  // 1. Query our data endpoint for getGames (asynchronous)
  const response = await fetch(`http://localhost:3000/data/game/${gameId}`)

  // 2. Use the response object to retrieve the JSON body (asynchronous)
  const gameData = await response.json()

  // 3. Return the data
  return gameData
}

export async function putGameDetails (gameData: any) {
  const response = await fetch('http://localhost:3000/data/game', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(gameData) // Send JSON object in custom header
  })
  return await response.json()
}

export async function patchGameDetails (gameData: any) {
  const response = await fetch('http://localhost:3000/data/game', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(gameData) // Send JSON object in custom header
  })
  return await response.json()
}

export async function deleteGame (gameId: number) {
  // Send delete request
  const response = await fetch(`http://localhost:3000/data/game/${gameId}`, {
    method: 'DELETE'
  })
  return await response.json()
}
