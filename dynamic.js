const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const cors = require('cors');
const db  = require('./config');

const app  = express()
let port = 1500

app.use(cors({origin:"*"}))
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('views'));


// congress

app.get("/data/:url_name/:mun",async function(req, res) {
  
  try {
    // console.log(req.params);
    // console.log(req.params.url_name);
    // console.log(req.params.mun);
    const conn = await db.connectDb();
    const sql =   await conn.all('SELECT * FROM url WHERE url_id =' + req.params.url_name );
    // console.log(sql);
    let mun = req.params.mun
    // var replaced = mun.split(' ').join('%20');
    let url = `${sql[0].url_name}${encodeURIComponent(mun)}`
    // console.log(url);
    let data = await axios.get(url)
      // console.log(data)
      res.json(data.data)
    //  res.send(JSON.stringify(data))
    

  } catch (e) {
    console.log(e);
  }

  })
  
  app.get('/',  async(req, res) => {
    try {
      const conn = await db.connectDb();
      const sql =   await conn.all('SELECT * FROM url ORDER BY url_id DESC')
      // console.log(sql)
      res.render('dynamic',{
        data:sql
      });

 } catch (err) {
     console.log(err)
 }
     
  });

  app.get('/city_mun/:id',  async(req, res) => {
    try {
      const conn = await db.connectDb();
      const sql =   await conn.all(`SELECT * FROM city_mun WHERE url_id = ${req.params.id}`)
    //  console.log(sql)
      res.json(sql)

 } catch (err) {
     console.log(err)
 }
     
  })
  
console.log("DB is connected :" + db.connectDb());
app.listen(port, () => console.log(`port is running on ${port}`))