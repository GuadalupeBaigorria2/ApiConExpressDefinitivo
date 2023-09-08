import { createConnection } from "mysql2/promise"

export const CreateDatabase = async()=>{
    //Cuando es async se usa await
    //async es promesas
    const conexion= await createConnection({
        host: "localhost",
        user: "root",
        password: "1234"
    })

    conexion.query("create database if not exists Instituto")
    .then(console.log("Se creo exitosamente la base de datos"))
    .catch(error=> {console.log(error)});

}

const conexion= createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "Instituto"
})

export const getConnection= ()=> {
    return conexion;
}

export const createTable = async()=> {
    (await conexion).query(`
    create table if not exists Usuario(
        UserId int not null auto_increment primary key,
        UserName varchar(50),
        LastName varchar(50),
        Edad int
    )
    `)
}