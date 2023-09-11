import { getConnection } from "../Database/Database.js";

export const PostPerson= async(req, res)=> {
    // try {
        const{UserName, LastName, Edad}= req.body;
        // if(!! UserName && !! LastName && !!Edad)
        // {
            const conexion= await getConnection();
            conexion.query("insert into usuario set ?", {UserName,LastName,Edad}).then("Se creo el usuario exitosamente");
            res.send("Exito");
        // }
    // } catch (error) {
    //     console.log(error);
    // }
}
// async va a esperar respuesta y no se va  terminar de ejecutar, esto corre mientras otros metodos corren
export const GetPerson= async(req, res)=> {
    try {
        const edad= 5;
        const conexion= await getConnection();
        const [respuesta]= conexion.query("select * from usuario");
        res.json(respuesta);

    } catch (error) {
        
    }
}