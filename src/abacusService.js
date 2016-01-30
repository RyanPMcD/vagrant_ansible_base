var request = require('request');

var abacus = 'http://hack-123.draftkingstest.com:4250/v1/scores/leaderboard?DraftGroupId=${dgId}&ContestId=${cId}&UserId=0&RowsToReturn=20&format=json'

// Get something from abacus
function getData(cb) {
    var dgId = '8636';
    var cId = '4540379';
    var endpointStep = abacus.replace(/\${dgId}/i, dgId);
    var finalEndpoint = endpointStep.replace(/\${cId}/i, cId);

    request.get(finalEndpoint, function(err, response, body) {
        if (!err && response.statusCode == 200) {
            console.log('returned from abacus');
            return cb(null, body);
        }
        else {
            console.log('didn\'t work');
            return cb(err);
        }
    });
}

module.exports = {
    getData: getData
};