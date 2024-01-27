const zod = require('zod');

const userSchema = zod.object({
    username: String(),
    name: String(),
    description: String(),
    information: String(),
    linkedin: String(),
    twitter: String()
})

module.exports={
    userSchema
}