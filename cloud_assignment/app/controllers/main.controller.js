
var utils = require('../modal/utils');
module.exports = {

    //show home page
    showHome: (req, res) => {
        //console.log('home page...');
        //console.log(utils.getAllTables());
        //console.log(utils.getTableInfo());
        res.render('pages/index',{page_code:'home'});
    },

    showSuccess: (req, res) => {
        let type = req.query.type;
        res.render('pages/success', { page_code:'success',type: type });
    },

    showEmployees: (req, res) => {
        var start, count = 0;
        var pagi = false;
        utils.getUsers({ is_manager: false }).then(function (result) {
            console.log("Initialized user details");
            console.log(result);
            if (result.Items && req.query.start && req.query.count) {
                start = parseInt(req.query.start);
                count = parseInt(req.query.count);
                result.Items = result.Items.slice(start, (count+start));
                pagi = true;
            }
            console.log('count', count);
            res.render('pages/employees', { page_code:'employee',result: result, start: start, count: count, pagi: pagi });
        }, function (err) {
            console.log("error user details");
            console.log(err);
            let result = {
                Items: [],
                Count:0
            };
            res.render('pages/employees', {page_code:'employee', result: result, start: start, count: count, pagi: pagi });
        });

    },
    addEmployee: (req, res) => {
        console.log(req.body);
        let item = {
            "name": req.body.name,
            "ID": Math.floor(Math.random() * 100) + 10,
            "is_manager": false

        };
        utils.addUser(item).then(function (result) {
            res.redirect('success?type=success');
        }, function (err) {
            console.log(err);
            res.redirect('success?type=error');
        });
    },

    //show managers page
    showManagers: (req, res) => {
        utils.getUsers({ is_manager: true }).then(function (result) {
            res.render('pages/managers', {  page_code:'manager',result: result });
        }, function (err) {
            console.log(err);
            let result = {
                Items: []
            };
            res.render('pages/managers', { page_code:'manager',result: result });
        });
    },
    addManager: (req, res) => {
        let item = {
            "name": req.body.name,
            "ID": Math.floor(Math.random() * 100) + 10,
            "is_manager": true
        };
        utils.addUser(item).then(function (result) {
            res.redirect('success?type=success');
        }, function (err) {
            console.log(err);
            res.redirect('success?type=error');
        });
    },
};