const express = require('express')
const app = express()
const path = require('path')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const db_path = path.join(__dirname, 'cricketTeam')
let db = null
const initializeDbAndStartServer = async () => {
  try {
    db = await open({
      filename: db_path,
      driver: sqlite3.Database,
    })
    app.listen(3000, () => {
      console.log('server running at http://localhost/3000')
    })
  } catch (e) {
    console.log(`error at:${e.message}`)
    process.exit(1)
  }
}
initializeDbAndStartServer();
//api1

app.get("/players",async(request,response)=>{
    const playersQuery=`select * from cricket_team
    order by player_id`
    const bookArray= await db.get(playersQuery);
    response.send=bookarray;
});
module.exports=app;
