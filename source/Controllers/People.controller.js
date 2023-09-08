import { getConnection } from "../Database/Database.js";

export const PostPerson= async(req, res)=> {
    // try {
        const{UserName, LastName, Edad}= req.body;
        if(!! UserName && !! LastName && !!Edad)
        {
            const conexion= await getConnection();
            conexion.query("insert into usuario set ?", {username,lastname,edad}).then("Se creo el usuario exitosamente");
        }
    // } catch (error) {
    //     console.log(error);
    // }
}