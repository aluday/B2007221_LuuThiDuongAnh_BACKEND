const Account = require('../models/account');
const ObjectId = require('../helpers/mongoose');
const ApiError = require('../helpers/api-error');


class accountController {
    async createAccout (req, res, next){
        let username = req.body.username;
        let password = req.body.password;
        let email = req.body.password;
        try{
            
            await Account.findOne({
                username: username
            })
            if(!username){
                const account = await Account.create ({
                    username: username,
                    password: password,
                    email: email,
                });
                res.send("Create account successfully");
            }
            else  return next(new ApiError(409, "Account already exist"));

        }catch(error){
            return next(new ApiError(500, "Cannot created account"));
        }
    }
    
    async loginAccount (req, res, next){
        let username = req.body.username;
        let password = req.body.password;
        try{
            const result = await Account.findOne({
                username: username,
                password: password
            })
            if(!result){
                return next(new ApiError(404, "Account not found"));
            }
            else res.send("Logged in successfully");
        }catch(error){
            return next(new ApiError(500, "An error occurred while login"))
        }
    }
}

module.exports = new accountController();