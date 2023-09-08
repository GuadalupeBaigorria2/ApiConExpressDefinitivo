import express from "express";
import peopleRoutes from "./Routes/People.routes.js";
import { CreateDatabase, createTable } from "./Database/Database.js";

const app= express();
const port=3010;
const arrayString=["Guadlaupe","Florencia"];
const users= [{username:"Guadalupe", lastname:"Baigorria", edad:26},{username:"David", lastname:"Tsai", edad:37}];

//el middleware se hace antes de cada llamada, es un intermediario
//cuando pasa un json, lo va a formatear
//convierte información a json
app.use(express.json());
app.use("/people", peopleRoutes);
CreateDatabase();
createTable();


app.get("/", (request, response)=>{
    response.send("Hello");
});

app.get("/users", (request, response)=>{
    response.json(users);
})

app.get("/users/:Id", (request, response)=>{
    const id= request.params.Id;
    const user=users[id];

    if(user != undefined)
    {
        response.json(user);
    }
    else{
        response.status(404).json({message:"Error"});
    }
    
})

app.post("/users", (req, res)=>{
    const body= req.body;
    if(body.username!= undefined && body.lastname!= undefined && body.edad!= undefined)
    {
        users.push(body);

        res.status(201);
        res.json({message:"Exito, dato cargado a users.", users});
    }
    else
    {
        res.status(400);
        res.json({message:"Error, no se a ha cargado a users.", users})
    }
    
})


//put sirve para modificar datos
app.put("/users/:id", (req, res) =>{
    const id= req.params.id;
    const {username}= req.body;

    const user= users[id];
    if(!! user && !! username )  //es lo mismo que hacer user!= undefined
    {
        const newUser= {...user,...{username}};// Puedo pasarle tambien const newUser= {...user, username:"Pedrito"}
        users[id]= newUser;
        res.status(201);
        res.json({message:"Exito, dato cargado a users.", users});
    }
    else{
        res.status(400);
        res.json({message:"Error, no se a ha cargado a users.", user})
    }
} )

app.delete("/users/:id", (req,res) =>{
    const id= req.params.id;
    if(users[id]!= undefined)
    {
        const deleteUser= users[id];
        users.splice(id,1);//elimina, el 1 representa la cantidad de elementos a eliminar desde el index
        res.json({deleteUser, message: "Ha sido eliminado"});// otra forma     res.json({message: "Ha sido eliminado",deleteUser});
    }
    else
    {
        res.status(400);
        res.json({message:"Error, no se a ha eliminado a users.", user})
    }
})


app.listen(port, ()=>{console.log("listening on port=", port)})




