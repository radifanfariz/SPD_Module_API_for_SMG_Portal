const router = require("express").Router();
const login = require("../../controllers/auth/login.controller");

module.exports = (app) => {
    router.post("/login",login.login)

    app.use("/api/auth", router)
}