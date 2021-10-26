var mongoose = require('mongoose');

// schema
var bioSchema = mongoose.Schema({
    name: {
        firstName: {
            type: String,
            required: true},
        surname: {
            type: String,
            required: true
        }
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    companyAge: {
        type: String,
        required: true
    },
    paysTax: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Bio Model
var Bio = module.exports = mongoose.model('bio', bioSchema);

module.exports.get = function(callback, limit) {
    Bio.find(callback).limit(limit);
}