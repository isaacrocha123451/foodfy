const chef = require('../models/chef')
const Chef = require('../models/chef')

module.exports = {
    index(req,res){
        Chef.all(function(){
            return res.render("admin/chefs/index")
        })

       
    },
    create(req,res){
        return res.render("admin/chefs/create")
        
    },
    post(req,res){
        Chef.create(req.body,function(chefs){
            return res.send("Deu certo")
        })
    },
    show(req,res){
        return res.render("admin/chefs/details")
    },
    edit(req,res){
        return res.render("admin/chefs/edit")
    },
    put(req,res){
    },
    delete(req,res){
    }
}   