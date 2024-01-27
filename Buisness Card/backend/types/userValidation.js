const zod = require('zod');

const userSchema = zod.object({
    username: zod.string(),
    name: zod.string(),
    description: zod.string(),
    information: zod.string(),
    linkedin: zod.string(),
    twitter: zod.string()
})

module.exports={
    userSchema
}