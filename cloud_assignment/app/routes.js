//create app router
const express = require("express"),
router = express.Router(),
mainController = require("./controllers/main.controller");
//var users = require("../modal/users");

//export router
module.exports = router;

// index page 
/*router.get('/', function(req, res) {
    res.render('pages/index');
});*/
router.get('/', mainController.showHome);

// employees page 
router.get('/employees', mainController.showEmployees);
router.post('/employee', mainController.addEmployee);

// managers page 
router.get('/managers', mainController.showManagers);
router.post('/manager', mainController.addManager);

// success page 
router.get('/success', mainController.showSuccess);


