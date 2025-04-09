const User = require('./UserModel')
 
class UserService {
    gets = async () => {
        const users = User.find({status:true});
        return users;
    }
}

module.exports = new UserService();