const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 9999

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Quan_li_cay',
  password: '1',
  port: 5432,
})

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const cors = require('cors');
app.use(cors({
  origin: '*'
}));

app.get('/cay', (request, response) => {
    pool.query('SELECT \"Ten_Cay\", \"Gia\", \"Anh_Url\" FROM \"Cay\" ORDER BY \"Ma_Cay\" ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})