const zod = require("zod");
import {User} from "../database/db"

const unameschema = zod.string().max(10);
const passSchema = zod.string().min(8);
const fnameSchma = zod.string();
const lnameSchema = zod.string();

const userInputValidation=(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const userValidation = unameschema.safeParse(username);
    const passValidation = passSchema.safeParse(password);
    const fnameValidation= fnameSchma.safeParse(firstName);
    const lnameValidation = lnameSchema.safeParse(lastName);

    

    
}

