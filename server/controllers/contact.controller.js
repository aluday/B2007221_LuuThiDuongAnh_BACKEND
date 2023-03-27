

const Contacts = require('../models/Contacts');
const ObjectId = require('../helpers/mongoose');
const ApiError = require('../api-error');
// exports.create = async(req, res, next) =>{
//     res.send("create handle");
//     if(!req.body?.name){
//         return next(new ApiError(400, "Name cann't empty"));
//     }
//     try{
//         const contacts = new Contacts(req.body);
//         contacts.create()
//     }catch(error){
//         return next(new ApiError(500, "An error occured whike creating the contact"))
//     }
// }

// exports.findAll = (req, res)=> {
//     res.send("findAll hander");
// }

// exports.findOne = (req, res)=> {
//     res.send("findOne hander");
// }

// exports.update = (req, res)=> {
//     res.send("update hander");
// }
// exports.delete = (req, res)=> {
//     res.send("delete hander");
// }

// exports.deleteAll = (req, res)=> {
//     res.send("deleteAll hander");
// }

// exports.findAllFavorite = (req, res)=> {
//     res.send("findAllFavorite hander");
// }
// const ObjectId = require('../helpers/mongoose');
// const ApiError = require('../helpers/api-error');

class contactController {
    create(req, res, next){
        if(!req.body?.name){
            return next(new ApiError(400, "Name cannot emty"));
        }
        try{
            const contacts = new Contacts(req.body);
            contacts
                .set('favorite', true)
                .save()
                .then(()=>{
                    return res.send("Create contact successfully")
                })
        }catch(error){
            return next(new ApiError(500, "Cannot created contact"))
        }
    }
    async findAll (req, res, next){
        try{
            const filter ={};
            const document = await Contacts.find(filter);
            res.send(document);

        }catch(error){
            return next(new ApiError(500, "An error occurred while retrieving contacts"));
        }
    }

    async findOne (req, res, next){
        let contactId = req.params.id;
        try{
            const document = await Contacts.findById(contactId);
            if(!document){
                return next(new ApiError(404 ,"No such user exists"));
            }
            else res.send(document);

        }catch(error){
            return next(new ApiError(500, `Error retrieving contact with id= ${contactId}`));
        }
    }

    async findAllFavorite (req, res, next){
        try{
            const document = await Contacts.find({favorite: "true"});
            if(!document){
                return next(new ApiError(404, "No such user exists"))
            }
            else res.send(document);
        }catch(error){
            return next(new ApiError(500, "An error occurred while retrieving favorite contacts"));
        }
    }

    async update(req, res, next){
        let contactId = req.params.id;
        let contactInfo = req.body;
        try{
            const document = await Contacts.findByIdAndUpdate(contactId, contactInfo);
            if(!document){
                return next(new ApiError(404, "Contact not found"));
            }
            else res.send("Contact was update successfully");
        }catch(error){
            return next(new ApiError(500, `Error updateting contact with id = ${contactId}`));
        }
    } 
    async delete (req, res, next){
        let contactId = req.params.id;
        try{
            const document = await Contacts.findByIdAndRemove(contactId);
            if(!document)
                return next(new ApiError(404, "Contact not found"));
            else res.send("Contact was deleted successfully");
        }catch(error){
            return next(new ApiError(500, `Could not delete contact ${contactId}`));
        }
    }
    
    async deleteAll (req, res, next){
        try{
            await Contacts.deleteMany();
            res.send("Deleted all contacts")
        }catch(error){
            return next(new ApiError(500, ))
        }
    }

}

module.exports = new contactController();