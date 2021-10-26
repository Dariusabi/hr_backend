// inititalize express router

let router = require('express').Router();

// set default API response

router.get('/api', function(req, res) {
    res.json({
        status: 'API Wroks',
        message: 'Welcome to FirstRest API'
    });
})

// Import Bio Controller
var bioController = require('./employeeController');

// Bio routes

router.route('/details')
    .get(bioController.index)
    .post(bioController.add);

router.route('/details/:employee_id')
    .get(bioController.view)
    .put(bioController.update)
    .delete(bioController.delete);
    
// Export API routes
module.exports = router;