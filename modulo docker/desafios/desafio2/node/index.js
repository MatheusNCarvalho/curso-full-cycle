const express = require('express')
const app = express()
const port = 3000

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodebd'
}
const mysql = require('mysql2/promise')

const initialTable = async () => {
  const connection = await mysql.createConnection(config)

  const sql = `CREATE TABLE IF NOT EXISTS people(id int not null auto_increment, name varchar(255), primary key(id))`
  await connection.query(sql)
  await connection.end()
}

let paginaHome = `
<!DOCTYPE html>
<html>
<style>
table, th, td {
  border:1px solid black;
}
</style>
<body>

<h1>Full Cycle Rocks!</h1>

#tabela

</body>
</html>
`

const findPeople = async (rows) => {
  let result = `
  <table style="width:30%">
  <tr>
    <th>Id</th>
    <th>Nome</th>
  </tr>
  `

  Object.keys(rows).forEach(function (key) {
    var row = rows[key];
    result += `
    <tr>
      <td>${row.id}</td>
      <td>${row.name}</td>
    </tr>
    `
  });


  result += '</table>'
  return result
}

app.get('/', async (req, res) => {

  try {
    await initialTable()

    const connection = await mysql.createConnection(config)
    await connection.connect();

    const sql = `INSERT INTO people(name) values('Aluno Full Cycle - ${Math.floor(Math.random() * 65536)}')`
    await connection.query(sql)
  
    const [peoples] = await connection.query("SELECT * FROM people");

    const response = paginaHome.replace('#tabela', await findPeople(peoples))
    await connection.end()

    res.send(response)

  } catch (error) {
    console.log(error)
    res.send(error.message)
  }
})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})