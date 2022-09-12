const CompanyCollection= require("../models/company")

class companyService{

    static async findAll(){
       return await CompanyCollection.find()
    }
}


module.exports = companyService