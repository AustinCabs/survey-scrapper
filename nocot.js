const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const cors = require('cors');

const app  = express()
let port = 1500

app.use(cors({origin:"*"}))
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('views'));

app.get("/data/:mun",async function(req, res) {
console.log(req.params.mun)
// let url = `http://135.225.240.35.bc.googleusercontent.com/PaSurveyWeb/reports/GetBarChartData?surveyId=2&questionId=4&cityMunicipality=${req.params.mun}`
let url = `http://135.225.240.35.bc.googleusercontent.com/PaSurveyNocot/reports/GetBarChartData?surveyId=6&questionId=10&cityMunicipality=${req.params.mun}`
let data = await axios.get(url)
  //console.log(data)
  res.json(data.data)
//  res.send(JSON.stringify(data))

})

app.get('/',  (req, res) => {
    res.render('north');
})

app.listen(port, () => console.log(`port is running on ${port}`))