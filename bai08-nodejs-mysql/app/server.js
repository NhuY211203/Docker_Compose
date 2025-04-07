const express = require('express');
const mysql = require('mysql2');
const app = express();

const db = mysql.createConnection({
  host: 'mysql',
  user: 'user',
  password: 'password',
  database: 'mydb'
});

app.get('/', (req, res) => {
  db.query('SELECT NOW()', (err, results) => {
    if (err) return res.send('DB Error');
    res.send('MySQL Time: ' + results[0]['NOW()']);
  });
});

app.listen(3001, () => console.log('Server on port 3001'));