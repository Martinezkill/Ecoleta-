// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer opercoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados,para nossas operacoes
//db.serialize(() => {

//     //criar uma tabela com comandos SQL
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places ( 
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //inserir 
//     const query =`
//         INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1649595410127-96bd07d019de?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "Colectoria",
//         "Guilherme Gemballa, Jardim America",
//         "Numero 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Residuos Eletronicos, Lampadas"]
    
//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("cadastrado com sucesso")
//         console.log(this)
//      }

//     // db.run(query, values, afterInsertData)

//     //consultar os dados da tabela
//     db.all(`SELECT * FROM places`, function(err, rows) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("aqui estāo seus registros")
//         console.log(rows)
//     })

//     //deletar um dado da tebela
//      db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
//        if(err) {
//            return console.log(err)
//         }
//         console.log("Registro deletado com sucesso!")
//     })
 //}) 
