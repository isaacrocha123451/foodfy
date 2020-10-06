const express = require('express')
const routes = express.Router()
const admin = require('../src/app/controllers/administrator')


routes.get("/", function(req, res) {
    return res.redirect('/admin/recipes')
})

routes.get("/admin/recipes",admin.index)
routes.get("/admin/recipes/create",admin.create)
routes.get("/admin/recipes/:id", admin.show)
routes.get("/admin/recipes/:id/edit",admin.edit)



routes.post("/admin/recipes",admin.post)
routes.put("/admin/recipes",admin.put)
routes.delete("/admin/recipes",admin.delete)



module.exports = routes 
