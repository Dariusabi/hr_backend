// Import Bio Model
Bio = require('./employeeModel');

// For Index 
exports.index = function (req, res) {
    Bio.get(function (err, bio) {
        if (err)
            res.json({
                status: 'error',
                message: err
            });
        res.json({
            status: 'success',
            message: 'Got Bio successfully!',
            data: bio
        });
    });
};

// For creating new bio
exports.add = function (req, res) {
    console.log(req.body);
    var bio = new Bio();
    bio.name = req.body.name ? req.body.name : bio.name;
    bio.email = req.body.email;
    bio.phone = req.body.phone;
    bio.team = req.body.team;
    bio.position = req.body.position;
    bio.salary = req.body.salary;
    bio.companyAge = req.body.companyAge;
    bio.paysTax = req.body.paysTax;

    // Save and check error
    bio.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: "New Bio Added!",
            data: bio
        });
    });
};

// View Bio
exports.view = function (req, res) {
    Bio.findById(req.params.employee_id, function (err, bio) {
        if (err)
            res.send(err);
        res.json({
            message: 'Bio Details',
            data: bio
        });
    });
};


// Update Bio
exports.update = function (req, res) {
    Bio.findById(req.params.employee_id, function (err, bio) {
        if (err)
            res.send(err);

        bio.name = req.body.name ? req.body.name : bio.name;
        bio.email = req.body.email;
        bio.phone = req.body.phone;
        bio.team = req.body.team;
        bio.position = req.body.position;
        bio.salary = req.body.salary;
        bio.companyAge = req.body.companyAge;
        bio.paysTax = req.body.paysTax;

 
        //save and check errors
        bio.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Bio Updated Successfully",
                data: bio
            });
        });
    });     
};  

// Delete Bio
exports.delete = function (req, res) {
    Bio.deleteOne({
        _id: req.params.employee_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Bio Deleted'
        }); 
    });
};