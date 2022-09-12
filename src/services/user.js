const UserModel = require('../models/user')
const index = async () => {
    //    get user from database and return await
    try {
        const users = await UserModel.find()
        console.log(users)
        return users
    } catch (error) {
        console.log(error)
    }
}

const userWithId = async (id) => {
    //    get user from database and return await
    try {
        const user = await UserModel.findById(id)
        if (user) {
            return user
        } else {
            return `No User exists with id: ${id}`
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = { index, userWithId }
