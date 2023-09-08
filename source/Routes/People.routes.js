import { PostPerson } from "../Controllers/People.controller.js";
import { Router } from "express";

//Con este Routes vamos a poder definir rutas que nos pasen
const router= Router();

router.post("/", PostPerson);
export default router;

