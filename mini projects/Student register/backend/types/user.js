const z = require('zod');

const userSchema = z.object({
    username: z.string().email(),
    password: z.string().min(5),
    name: z.string(),
    rollno: z.string(),
    branch: z.string()


});

module.exports={
    userSchema
}
