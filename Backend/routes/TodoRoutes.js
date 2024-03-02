const {Router} =require("express")
const {getTodos,saveTodos} = require("../controller/TodoController")

const router=Router();

router.get("/get",getTodos)
router.post("/save",saveTodos)

module.exports = router;