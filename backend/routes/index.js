
const meetRoutes = require('./meet_routes');

module.exports = function(app, db){
    meetRoutes(app, db);
};