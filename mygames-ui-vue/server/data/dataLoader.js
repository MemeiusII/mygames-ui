import fs from 'fs'

// Load games into the global object so we don't have to worry about editing the file
export function loadGlobalData() {
  const data = fs.readFileSync('./server/data/mygames.json', { encoding: 'utf-8' })
  const games = JSON.parse(data)
  global.games = games
}
