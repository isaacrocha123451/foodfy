module.exports = {
    index(req,res){
        return res.render("admin/recipes/index")
    },
    create(req,res){
        return res.render("admin/recipes/create")
    },
    show(req,res){
       return res.render("admin/recipes/details")
    },
    edit(req,res){
        return res.render("admin/recipes/edit")

    },
    post(req,res){

    },
    put(req,res){

    },
    delete(req,res){

    }

}