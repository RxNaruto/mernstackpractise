const z = require("zod");

const userSchema = z.object({
    username: z.string().email(),
    password: z.string().min(7),
    firstName: z.string(),
    lastName: z.string(),
    department: z.string()
});

module.exports={
    userSchema
}