import postgres from 'postgres'

const sql =  postgres({
  host: 'localhost',
  port: '5432',
  database: 'TrabalhoBAN2',
  username: 'grasi',
  password: '123',
})

export default sql
